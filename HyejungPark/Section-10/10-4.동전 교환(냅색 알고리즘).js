/*
[문제] 동전 교환

다음과 같이 여러 단위의 동전들이 주어져 있을 때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.

*/

const coins = [1, 2, 5];
const amount = 15;

function solution(coin, m) {
  let answer = 0;
  // 거슬러 주어야 할 돈 m 만큼의 길이를 가진 배열 dy
  let dy = Array.from({length: m + 1}, () => 1000);
  dy[0] = 0;

  // 코인의 갯수만큼 반복문을 돈다.
  for (let i = 0; i < coin.length; i++) {
    // 현재 j는 코인의 i번째 부터 시작해서 m까지 돈다.
    // 만약 현재 코인이 1이라면 1부터 시작, 2라면 2부터 시작, 5라면 5부터 시작...
    for (let j = coin[i]; j <= m; j++) {
      // dy 배열에는 현재 금액(j원)을 거슬러 주기 위해서 필요한 동전의 갯수가 담겨있다.
      // 1에 대해서 반복을 돌면 j원에 대해서 1원으로 거슬러줄 수 있는 동전의 갯수가 담긴다.
      // 다음 반복에서 2원에 대해서 반복을 돌면... dy[j-coin[i]]+1 과 비교해 미니멈 값을 비교하게 되는데
      // 이 dy[j-coin[i]]+1 가 뭐냐면
      // 예를 들어 현재 j가 5 이고, coin[i]가 2라면 dy[3] + 1의 지점으로 가서 몇 개의 동전을 사용했는지 값을 계산하는 것이다.
      // 현재 시점에서 dy[3]은 2(2원 + 1원) 이기 때문에 dy[5]는 2 + 1 즉 3이 된다. (1원 * 5개, 2원 * 1 + 1원 *2, 2원*2 + 1원)
      // 반복해서 최소값으로 계속 갱신해준다.
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
    console.log(dy);
  }
  answer = dy[m];
  return answer;
}

const result = solution(coins, amount);
console.log(result);
