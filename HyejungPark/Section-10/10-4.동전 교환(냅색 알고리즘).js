/*
[문제] 동전 교환

다음과 같이 여러 단위의 동전들이 주어져 있을 때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.

*/

const coins = [1, 2, 5];
const amount = 15;

function solution(coin, m) {
  let answer = 0;
  let dy = Array.from({length: m + 1}, () => 1000);
  dy[0] = 0;
  for (let i = 1; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}

const result = solution(coins, amount);
console.log(result);
