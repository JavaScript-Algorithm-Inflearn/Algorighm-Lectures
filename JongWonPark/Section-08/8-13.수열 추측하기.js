/*
[문제] 수열 추측하기 - Recursion, Memoization
- 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
- 그리고 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
- 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
- 3 1 2 4
-  4 3 6
-   7 9
-   16
- N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하시오.
- 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

[입력]
- 첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다.
- N은 가장 윗줄에 있는 숫자의 개수를 의미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.

[출력]
- 첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다.
- 답이 존재하지 않는 경우는 입력으로 주어지지 않는다.

[입력예제 1]
- 4, 16

[출력예제 1]
- [3, 1, 2, 4]

*/

/** 풀이1 */
const solution1 = (n, f) => {
  const combination = (n, r) => {
    const memo = [];
    for (let i = 0; i <= n; i++) {
      memo.push([]);
    }

    const aux = (n, r) => {
      if (memo[n][r] !== undefined) return memo[n][r];

      if (r === 0 || r === n) return (memo[n][r] = 1);

      return (memo[n][r] = aux(n - 1, r - 1) + aux(n - 1, r));
    };

    return aux(n, r);
  };

  let result;
  let flag = false;
  const combinations = [];
  for (let i = 0; i < n; i++) {
    combinations.push(combination(n - 1, i));
  }

  const aux = (arr, total) => {
    if (flag) return;
    if (total > f) return;
    if (arr.length === n && total === f) {
      result = arr;
      flag = true;
    } else {
      for (let i = 0; i < n; i++) {
        if (!arr.includes(i + 1)) {
          aux([...arr, i + 1], total + (i + 1) * combinations[arr.length]);
        }
      }
    }
  };

  aux([], 0);

  return result;
};

/** 레퍼런스 */
const reference = (n, f) => {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
};

/** 테스트 케이스1 */
let n = 4;
let f = 16;

console.log('1:', solution1(n, f)); // [3, 1, 2, 4]
console.log('1:', reference(n, f)); // [3, 1, 2, 4]
