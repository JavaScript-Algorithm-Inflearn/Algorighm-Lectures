/*
[문제] 삽입정렬
- N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
- 정렬하는 방법은 삽입정렬입니다.
- 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입하는 방법이다.

[입력]
- 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
- 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다.
- 각 자연수는 정수형 범위 안에 있습니다.

[출력]
- 오름차순으로 정렬된 수열을 출력합니다.

[입력예제 1]
- [11, 7, 5, 6, 10, 9]

[출력예제 1]
- [5, 6, 7, 9, 10, 11]
*/

/** 풀이1 - 시간복잡도 최소 N, 최대 N^2 */
const solution = (arr) => {
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    for (let j = 0; j < i; j++) {
      if (result[i] < result[j]) {
        result.splice(j, 0, result.splice(i, 1)[0]);
      }
    }
  }

  return result;
};

/** 레퍼런스 - 시간복잡도 최소 N, 최대 N^2 */
const reference = (arr) => {
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    let temp = result[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      if (temp < result[j]) result[j + 1] = result[j];
      else break;
    }
    result[j + 1] = temp;
  }

  return result;
};

/** 테스트 케이스1 */
let arr = [11, 7, 5, 6, 10, 9];

console.log(1, solution(arr)); // [5, 6, 7, 9, 10, 11]
console.log(1, reference(arr)); // [5, 6, 7, 9, 10, 11]
