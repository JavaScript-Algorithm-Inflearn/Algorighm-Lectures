/*
[문제] 계단 오르기 - Dynamic Programming
- 철수는 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다.
- 만약 총 4계단을 오른다면 그 방법의 수는 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2로 5가지이다.
- 그렇다면 총 N계단일 때 철수가 올라갈 수 있는 방법의 수는 몇 가지인가?

[입력]
- 첫째 줄은 계단의 개수인 자연수 N(3≤N≤45)이 주어집니다.

[출력]
- 첫 번째 줄에 올라가는 방법의 수를 출력합니다.

[입력예제 1]
- 7

[출력예제 1]
- 21
*/

/** 풀이1 - Recursion, Memoization */
const solution1 = (n) => {
  const memo = [1, 1];

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
  const memo = [1, 1];

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
};

/** 레퍼런스 */
const reference = (n) => {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
};

/** 테스트 케이스1 */
let n = 7;

console.log('1:', solution1(n)); // 21
console.log('1:', solution2(n)); // 21
console.log('1:', reference(n)); // 21
