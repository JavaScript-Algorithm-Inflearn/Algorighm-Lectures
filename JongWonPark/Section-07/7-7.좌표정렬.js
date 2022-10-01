/*
[문제] 좌표정렬
- N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요.
- 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.

[입력]
- 첫 번째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.
- 두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다. x, y값은 양수만 입력됩니다.

[출력]
- N개의 좌표를 정렬하여 출력하세요.

[입력예제 1]
- [ [2, 7], [1, 3], [1, 2], [2, 5], [3, 6] ]

[출력예제 1]
- [ [1, 2], [1, 3], [2, 5], [2, 7], [3, 6] ]
*/

/** 풀이1 - 선택정렬 시간복잡도 N^2 */
const selectionSort = (arr) => {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    // 배열에서 최소값 찾기
    let minIdx = i;

    for (let j = i + 1; j < result.length; j++) {
      const [x, y] = result[j];
      if (
        result[minIdx][0] > x ||
        (result[minIdx][0] === x && result[minIdx][1] > y)
      )
        minIdx = j;
    }

    // 최소값과 배열의 맨 앞에 위치한 값 교환
    [result[i], result[minIdx]] = [result[minIdx], result[i]];
  }

  return result;
};

/** 풀이2 - 버블정렬 시간복잡도 N^2 */
const bubbleSort = (arr) => {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      const [x1, y1] = result[j];
      const [x2, y2] = result[j + 1];

      if (x1 > x2 || (x1 === x2 && y1 > y2))
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
    }
  }

  return result;
};

/** 풀이3 - 삽입정렬 시간복잡도 N^2 */
const insertionSort = (arr) => {
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    const [x1, y1] = result[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      const [x2, y2] = result[j];
      if (x1 < x2 || (x1 === x2 && y1 < y2)) result[j + 1] = result[j];
      else break;
    }
    result[j + 1] = [x1, y1];
  }

  return result;
};

/** 레퍼런스 - 시간복잡도 N * log(N) */
const reference = (arr) => {
  const result = [...arr];

  result.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  return result;
};

/** 테스트 케이스1 */
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(1, selectionSort(arr)); // [ [1, 2], [1, 3], [2, 5], [2, 7], [3, 6] ]
console.log(1, bubbleSort(arr)); // [ [1, 2], [1, 3], [2, 5], [2, 7], [3, 6] ]
console.log(1, insertionSort(arr)); // [ [1, 2], [1, 3], [2, 5], [2, 7], [3, 6] ]
console.log(1, reference(arr)); // [ [1, 2], [1, 3], [2, 5], [2, 7], [3, 6] ]
