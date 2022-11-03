/*
[문제] 최대 점수 구하기 - Dynamic Programming
- 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를풀려고 합니다.
- 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
- 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
- (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

[입력]
- 첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다.
- 두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.

[출력]
- 첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.

[입력예제 1]
- 20, [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]

[출력예제 1]
- 41
*/

/** 풀이1 */
const solution1 = (m, arr) => {
  let knapsack = new Array(m + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const copy = [...knapsack];
    for (let j = arr[i][1]; j <= m; j++) {
      knapsack[j] = Math.max(copy[j], copy[j - arr[i][1]] + arr[i][0]);
    }
  }

  return knapsack[m];
};

/** 풀이2 */
const solution2 = (m, arr) => {
  let knapsack = new Array(m + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = m; j >= arr[i][1]; j--) {
      knapsack[j] = Math.max(knapsack[j], knapsack[j - arr[i][1]] + arr[i][0]);
    }
  }

  return knapsack[m];
};

/** 레퍼런스 */
const reference = (m, arr) => {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
};

/** 테스트 케이스1 */
let m = 20;
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log('1:', solution1(m, arr)); // 41
console.log('1:', solution2(m, arr)); // 41
console.log('1:', reference(m, arr)); // 41
