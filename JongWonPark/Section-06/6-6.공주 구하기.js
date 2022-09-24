/*
[문제] 공주 구하기 - 큐
- 정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다.
- 정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다.
- 정보왕국의 왕은 다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.
- 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다.
- 그리고 1번 왕자부터 N번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다.
- 그리고 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다.
- 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.
- 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
- 이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.

[입력]
- 첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.

[출력]
- 첫 줄에 마지막 남은 왕자의 번호를 출력합니다.

[입력예제 1]
- 8, 3

[출력예제 1]
- 7
*/

/** 풀이1 - 시간복잡도 N^2 */
const solution1 = (n, k) => {
  const queue = new Array(n).fill(undefined).map((e, i) => i + 1);
  let idx = k - 1;

  while (queue.length > 1) {
    while (idx >= queue.length) {
      idx -= queue.length;
    }

    queue.splice(idx, 1);
    idx += k - 1;
  }

  return queue[0];
};

/** 풀이2 - 시간복잡도 N^2 */
const solution2 = (n, k) => {
  const queue = new Array(n).fill(undefined).map((e, i) => i + 1);

  for (let i = 1; i <= (n - 1) * k; i++) {
    if (i % k === 0) {
      queue.shift();
    }
    if (i % k > 0) {
      queue.push(queue.shift());
    }
  }

  return queue[0];
};

/** 풀이3 - 시간복잡도 N^2 */
const solution3 = (n, k) => {
  const queue = new Array(n).fill(undefined).map((e, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
  }

  return queue[0];
};

/** 테스트 케이스1 */
let n = 8;
let k = 3;

console.log(1, solution1(n, k)); // 7
console.log(1, solution2(n, k)); // 7
console.log(1, solution3(n, k)); // 7
