/*
[문제] 동전 교환

다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.


▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다. 
각 동전의 종류는 100원을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다
*/

function minChanges(coins, total) {
  const coinsSorted = coins.slice().sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < coinsSorted.length; i++) {
    // total에서 현재 동전을 나눈 몫은, 동전을 몇개 사용했는지 카운트가 된다.
    count += parseInt(total / coinsSorted[i]);
    // 동전을 사용했으므로 그 나머지는 total이 된다.
    total = total % coinsSorted[i];
  }
  return count;
}

const result = minChanges([1, 2, 5], 15);
console.log(result);

function reference(arr, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  // 재귀함수
  function DFS(L, sum) {
    // 종료 조건
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    }
    // 재귀 조건
    else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

const refResult = reference([1, 2, 5], 15);
console.log(refResult);
