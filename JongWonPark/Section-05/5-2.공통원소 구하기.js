/*
[문제] 공통원소 구하기 - Two Pointers Algorithm
- A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

[입력]
- 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
- 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
- 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
- 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
- 각 집합의 원소는 1,000,000,000이하의 자연수입니다.

[출력]
- 두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

[입력예제 1]
- [1, 3, 9, 5, 2], [3, 2, 5, 7, 8]

[출력예제 1]
- [2, 3, 5]
*/

/** 풀이1 - filter(), includes(), sort() 이용. 시간복잡도 N^2 */
const nativeSolution = (arr1, arr2) => {
  return arr1.filter((e) => arr2.includes(e)).sort((a, b) => a - b);
};

/** 풀이2 - 투 포인터 알고리즘 이용. 시간복잡도 N*log(N) */
const solution = (arr1, arr2) => {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  // 1. 오름차순으로 정렬한다. N * log(N) + M * log(M)
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // 2. 공통 원소를 추출한다. N + M
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1 += 1;
      p2 += 1;
    } else if (arr1[p1] < arr2[p2]) {
      p1 += 1;
    } else {
      p2 += 1;
    }
  }

  return result;
};

/** 테스트 케이스1 */
const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(nativeSolution(arr1, arr2)); // [2, 3, 5]
console.log(solution(arr1, arr2)); // [2, 3, 5]
