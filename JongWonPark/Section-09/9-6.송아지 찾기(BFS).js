/*
[문제] 송아지 찾기 - BFS
- 현수는 송아지를 잃어버렸다.
- 다행히 송아지에는 위치추적기가 달려 있다.
- 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어지면
- 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다.
- 송아지는 움직이지 않고 제자리에 있다.
- 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수있다.
- 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하세요.

[입력]
- 첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가 주어진다.
- 직선의 좌표 점은 1부터 10,000까지이다.

[출력]
- 점프의 최소횟수를 구한다.
- 답은 1 이상이다.

[입력예제 1]
- 5, 14

[출력예제 1]
- 3

[입력예제 2]
- 8, 3

[출력예제 2]
- 5
*/

/** 풀이1 */
const solution1 = (s, e) => {
  let result = 0;
  const moves = [-1, 1, 5];
  let queue = [s];
  let nextQueue = [];
  const checked = [s];
  let vertex = s;

  while (vertex !== e) {
    while (queue.length > 0) {
      vertex = queue.shift();

      if (vertex === e) return result;

      for (const x of moves) {
        let temp = vertex + x;
        if (!checked.includes(temp)) {
          nextQueue.push(temp);
          checked.push(temp);
        }
      }
    }
    result++;

    queue = nextQueue;
    nextQueue = [];
  }

  return result;
};

/** 레퍼런스1 */
const reference1 = (s, e) => {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
};

/** 레퍼런스2 */
const reference2 = (s, e) => {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
};
/** 테스트 케이스1 */
let s = 5;
let e = 14;

console.log('1:', solution1(s, e)); // 3
console.log('1:', reference1(s, e)); // 3
console.log('1:', reference2(s, e)); // 3

/** 테스트 케이스2 */
s = 8;
e = 3;

console.log('2:', solution1(s, e)); // 5
console.log('2:', reference1(s, e)); // 5
console.log('2:', reference2(s, e)); // 5
