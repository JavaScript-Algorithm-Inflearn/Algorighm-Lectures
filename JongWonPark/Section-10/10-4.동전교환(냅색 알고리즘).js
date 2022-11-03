/*
[문제] 동전교환 - Dynamic Programming
- 다음과 같이 여러 단위의 동전들이 주어져 있을 때
- 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가?
- 각 단위의 동전은 무한정 쓸 수 있다.

[입력]
- 첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다.
- 두 번째 줄에는 N개의 동전의 종류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
- 각 동전의 종류는 100원을 넘지 않는다.

[출력]
- 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.

[입력예제 1]
- 15, [1, 2, 5]

[출력예제 1]
- 3
*/

/** 풀이1 */
// 0 1 1 0 0 1 0 0 0 0 0 0 0 0 0 0
// 0 1 1 2 2 1 2 2 0 0 2 0 0 0 0 0
// 0 1 1 2 2 1 2 2 3 3 2 3 3 0 0 3
const solution1 = (m, coin) => {
  const knapsack = new Array(m + 1).fill(0);
  for (const x of coin) {
    knapsack[x] = 1;
  }

  for (let i = 1; i <= m; i++) {
    for (const x of coin) {
      const next = i + x;
      if (next <= m && knapsack[i] > 0 && knapsack[next] === 0) {
        knapsack[next] = knapsack[i] + 1;
        if (next === m) return knapsack[m];
      }
    }
  }
};

/** 풀이2 */
const solution2 = (m, coin) => {
  const knapsack = new Array(m + 1).fill(501);
  knapsack[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      knapsack[j] = Math.min(knapsack[j], knapsack[j - coin[i]] + 1);
    }
  }

  return knapsack[m];
};

/** 레퍼런스 */
const reference = (m, coin) => {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 1; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
};

/** 테스트 케이스1 */
let m = 15;
let coin = [1, 2, 5];

console.log('1:', solution1(m, coin)); // 3
console.log('1:', solution2(m, coin)); // 3
console.log('1:', reference(m, coin)); // 3
