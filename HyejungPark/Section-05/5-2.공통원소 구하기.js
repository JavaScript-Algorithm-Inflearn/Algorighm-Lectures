/*
[문제] 공통 원소 구하기 - Two Pointers Algorithm

A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
그램을 작성하세요.

[입력]
- 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
- 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
- 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
- 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
- 각 집합의 원소는 1,000,000,000이하의 자연수입니다.

[출력]
- 두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

*/

function solution1(arr1, arr2) {
  const M = arr1.length;
  const N = arr2.length;

  // 두 배열을 오름차순 정렬한다.
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let commonElements = [];

  let p1 = (p2 = 0);

  while (p1 < M && p2 < N) {
    // p1과 p2가 가리키는 값을 비교해 같을 경우, 요소를 push 하고 p1, p2를 증가
    if (arr1[p1] === arr2[p2]) {
      p1++;
      commonElements.push(arr2[p2++]);
    }
    // 두 값을 비교해 더 작은 쪽의 포인터를 증가시킨다.
    // 이미 오름차순으로 정렬이 완료된 상태이기 때문에,
    // 작은 쪽이 있다면 그 뒤에 같은 값이 나올 가능성이 없기 때문이다.
    else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return commonElements;
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];
let result1 = solution1(arr1, arr2);
console.log(result1);

/*
[풀이과정]
- 두 개의 포인터를 사용해서 돌면서, 작은 쪽은 증가시키고 같으면 push하는 방식?!
- 놓쳤던 부분 : 같은 경우에는 두 포인터를 모두 증가시켜야 다음 비교를 할 수 있음...

*/
