/*
[문제] 돌다리 건너기 - Dynamic Programming
- 철수는 학교에 가는데 개울을 만났습니다.
- 개울은 N개의 돌로 다리를 만들어 놓았습니다.
- 철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있습니다.
- 철수가 개울을 건너는 방법은 몇 가지일까요?

[입력]
- 첫째 줄은 돌의 개수인 자연수 N(3≤N≤45)이 주어집니다.

[출력]
- 첫 번째 줄에 개울을 건너는 방법의 수를 출력합니다.

[입력예제 1]
- 7

[출력예제 1]
- 34
*/

/** 풀이1 - Recursion, Memoization */
const solution1 = (n) => {
  const memo = [1, 2];

  const aux = (n) => {
    if (memo[n] === undefined) {
      return (memo[n] = aux(n - 1) + aux(n - 2));
    }

    return memo[n];
  };

  return aux(n);
};

/** 풀이2 - Tabulation */
const solution2 = (n) => {
  const memo = [1, 2];

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
};

/** 레퍼런스 */
const reference = (n) => {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];
  return answer;
};

/** 테스트 케이스1 */
let n = 7;

console.log('1:', solution1(n)); // 21
console.log('1:', solution2(n)); // 21
console.log('1:', reference(n)); // 21
