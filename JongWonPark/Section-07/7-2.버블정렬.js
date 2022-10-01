/*
[문제] 버블정렬
- N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
- 정렬하는 방법은 버블정렬입니다.
- 인접한 두 원소를 검사하여 정렬하는 방법이다.

[입력]
- 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
- 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다.
- 각 자연수는 정수형 범위 안에 있습니다.

[출력]
- 오름차순으로 정렬된 수열을 출력합니다.

[입력예제 1]
- [13, 5, 11, 7, 23, 15]

[출력예제 1]
- [5, 7, 11, 13, 15, 23]
*/

/** 풀이1 - 시간복잡도 최소 N, 최대 N^2 */
const solution = (arr) => {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < result.length - i - 1; j++) {
      // 인접한 두 원소 검사
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return result;
};

/** 테스트 케이스1 */
let arr = [13, 5, 11, 7, 23, 15];

console.log(1, solution(arr)); // [5, 7, 11, 13, 15, 23]
