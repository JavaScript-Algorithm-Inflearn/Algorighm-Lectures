/*
[문제] 선택정렬
- N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
- 정렬하는 방법은 선택정렬입니다.
- 1. 주어진 리스트 중에 최소값을 찾는다.
- 2. 그 값을 맨 앞에 위치한 값과 교환한다.
- 3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.

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

/** 풀이1 - 시간복잡도 N^2 */
const solution = (arr) => {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    // 배열에서 최소값 찾기
    let minIdx = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIdx]) minIdx = j;
    }

    // 최소값과 배열의 맨 앞에 위치한 값 교환
    [result[i], result[minIdx]] = [result[minIdx], result[i]];
  }

  return result;
};

/** 테스트 케이스1 */
let arr = [13, 5, 11, 7, 23, 15];

console.log(1, solution(arr)); // [5, 7, 11, 13, 15, 23]
