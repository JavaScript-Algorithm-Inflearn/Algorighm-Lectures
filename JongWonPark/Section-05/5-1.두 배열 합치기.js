/*
[문제] 두 배열 합치기 - Two Pointers Algorithm
- 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

[입력]
- 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
- 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
- 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
- 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
- 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

[출력]
- 오름차순으로 정렬된 배열을 출력합니다.

[입력예제 1]
- [1, 3, 5], [2, 3, 6, 7, 9]

[출력예제 1]
- [1, 2, 3, 3, 5, 6, 7, 9]
*/

/** 풀이1 - sort() 이용. 시간복잡도 N*log(N) */
const nativeSolution = (arr1, arr2) => {
  return arr1.concat(arr2).sort((a, b) => a - b);
};

/** 풀이2 - 투 포인터 알고리즘 이용. 시간복잡도 N */
const solution = (arr1, arr2) => {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1 += 1;
    } else {
      result.push(arr2[p2]);
      p2 += 1;
    }
  }

  while (p1 < arr1.length) {
    result.push(arr2[p1]);
    p1 += 1;
  }
  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    p2 += 1;
  }

  return result;
};

/** 테스트 케이스1 */
const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.log(nativeSolution(arr1, arr2)); // [1, 2, 3, 3, 5, 6, 7, 9]
console.log(solution(arr1, arr2)); // [1, 2, 3, 3, 5, 6, 7, 9]
