/*
[문제] 동전교환 - Recursion
- 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가?
- 각 단위의 동전은 무한정 쓸 수 있다.

[입력]
- 첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다.
- 두 번째 줄에는 N개의 동전의 종류가 주어지고, 그 다음 줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
- 각 동전의 종류는 100원을 넘지 않는다.

[출력]
- 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.

[입력예제 1]
- 15, [1, 2, 5]

[출력예제 1]
- 3
*/

/** 풀이1 */
const solution1 = (m, arr) => {
  let result = Number.MAX_SAFE_INTEGER;

  const aux = (sum, count) => {
    if (sum > m) return;
    if (sum === m) {
      result = Math.min(result, count);
    } else {
      for (const x of arr) {
        aux(sum + x, count + 1);
      }
    }
  };

  aux(0, 0);

  return result;
};

/** 레퍼런스 */
const reference = (m, arr) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
};

/** 테스트 케이스1 */
let m = 15;
let arr = [1, 2, 5];

console.log('1:', solution1(m, arr)); // 3
console.log('1:', reference(m, arr)); // 3
