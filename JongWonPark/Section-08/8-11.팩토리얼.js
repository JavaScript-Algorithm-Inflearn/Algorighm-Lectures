/*
[문제] 팩토리얼 - Recursion
- 자연수 N을 입력하면 N!값을 구하세요.
- N! = n*(n-1)*(n-2)*.....*2*1입니다.
- 만약 N=5라면 5!=5*4*3*2*1=120입니다.

[입력]
- 첫째 줄에 자연수 N(3<=n<=10)이 입력됩니다.

[출력]
- 첫째 줄에 N팩토리얼 값을 출력합니다.

[입력예제 1]
- 5

[출력예제 1]
- 120
*/

/** 풀이1 - 재귀 */
const solution1 = (n) => {
  if (n === 1) return 1;

  return n * solution1(n - 1);
};

/** 풀이2 - 꼬리 재귀 */
const solution2 = (n, total = 1) => {
  if (n === 1) return total;

  return solution2(n - 1, n * total);
};

/** 레퍼런스 */
const reference = (n) => {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
};

/** 테스트 케이스1 */
let n = 5;

console.log('1:', solution1(n)); // 120
console.log('1:', solution2(n)); // 120
console.log('1:', reference(n)); // 120
