/*
[문제] 조합의 경우의 수 - Recursion, Memoization
- nCr = n! / {(n - r)! * r!}로 계산합니다.
- 하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여
- 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
- nCr = (n-1)C(r-1) + (n - 1)Cr

[입력]
- 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.

[출력]
- 첫째 줄에 조합수를 출력합니다.

[입력예제 1]
- 5, 3

[출력예제 1]
- 10

[입력예제 2]
- 33, 19

[출력예제 2]
- 818809200
*/

/** 풀이1 */
const solution1 = (n, r) => {
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

/** 풀이2 */
const solution2 = (n, r) => {
  const memo = [];
  for (let i = 0; i <= n; i++) {
    memo.push([]);
  }

  const aux = (n, r) => {
    if (memo[n][r] !== undefined) return memo[n][r];

    if (r === 0 || r === n) return (memo[n][r] = 1);

    memo[n][r] = aux(n - 1, r - 1) + aux(n - 1, r);
    // nCr = nC(n-r)을 이용
    memo[n][n - r] = memo[n][r];

    return memo[n][r];
  };

  return aux(n, r);
};

/** 레퍼런스 */
const reference = (n, r) => {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
};

/** 테스트 케이스1 */
let n = 5;
let r = 3;

console.log('1:', solution1(n, r)); // 10
console.log('1:', solution2(n, r)); // 10
console.log('1:', reference(n, r)); // 10

/** 테스트 케이스2 */
n = 33;
r = 19;

console.log('2:', solution1(n, r)); // 818809200
console.log('2:', solution2(n, r)); // 818809200
console.log('2:', reference(n, r)); // 818809200
