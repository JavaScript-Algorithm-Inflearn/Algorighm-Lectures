/*
[문제] 마구간 정하기 - 이진 탐색
- N개의 마구간이 수직선상에 있습니다.
- 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간 간에 좌표가 중복되는 일은 없습니다.
- 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
- 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
- C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하는 프로그램을 작성하세요.

[입력]
- 첫째 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
- 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

[출력]
- 첫째 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

[입력예제 1]
- 3, [ 1, 2, 8, 4, 9 ]

[출력예제 1]
- 3

/** 풀이1 - 시간복잡도 N * log(N) */
const solution1 = (c, stable) => {
  // 좌표를 오름차순으로 정렬
  stable.sort((a, b) => a - b); // 1, 2, 4, 8, 9

  // 거리를 담은 배열 생성
  const distances = []; // 1, 2, 4, 1
  for (let i = 0; i < stable.length - 1; i++) {
    distances.push(stable[i + 1] - stable[i]);
  }

  // 최소 거리
  let left = Math.min(...distances);
  // 최대 거리
  let right = stable[stable.length - 1];

  let result = Number.MIN_SAFE_INTEGER;

  while (left <= right) {
    // 최대 거리 제한
    const middle = Math.floor((left + right) / 2);
    let sums = [];
    let sum = 0;
    let count = 2;

    for (const x of distances) {
      if (sum + x <= middle) sum += x;
      else {
        count++;
        sums.push(sum);
        sum = x;
      }
    }

    if (count <= c) {
      result = Math.min(...sums);
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return result;
};

/** 풀이2 - 시간복잡도 N * log(N) */
const solution2 = (c, stable) => {
  // 좌표를 오름차순으로 정렬
  stable.sort((a, b) => a - b); // 1, 2, 4, 8, 9

  // 거리를 담은 배열 생성
  const distances = []; // 1, 2, 4, 1
  for (let i = 0; i < stable.length - 1; i++) {
    distances.push(stable[i + 1] - stable[i]);
  }

  // 최소 거리
  let left = Math.min(...distances);
  // 최대 거리
  let right = stable[stable.length - 1];

  let result;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    let endpoint = stable[0];
    let count = 1;

    for (let i = 1; i < stable.length; i++) {
      if (stable[i] - endpoint >= middle) {
        endpoint = stable[i];
        count++;
      }
    }

    if (count >= c) {
      result = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return result;
};

/** 레퍼런스 - 시간복잡도 N * log(N) */
const reference = (c, stable) => {
  function count(stable, dist) {
    let cnt = 1,
      ep = stable[0];
    for (let i = 1; i < stable.length; i++) {
      if (stable[i] - ep >= dist) {
        cnt++;
        ep = stable[i];
      }
    }
    return cnt;
  }

  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
};

/** 테스트 케이스1 */
let c = 3;
let stable = [1, 2, 8, 4, 9];

console.log(1, solution1(c, stable)); // 3
console.log(1, solution2(c, stable)); // 3
console.log(1, reference(c, stable)); // 3
