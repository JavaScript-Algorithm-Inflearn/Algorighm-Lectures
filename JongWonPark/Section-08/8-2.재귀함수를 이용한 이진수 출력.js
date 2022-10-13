/*
[문제] 재귀함수 - 재귀
- 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요.
- 단 재귀함수를 이용해서 출력해야 합니다.

[입력]
- 첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.

[출력]
- 첫 번째 줄에 이진수를 출력하세요.

[입력예제 1]
- 11

[출력예제 1]
- 1011
*/

/** 풀이1 */
const solution1 = (n) => {
  let result = '';

  const aux = (n) => {
    if (n === 0) return;

    result = String(n % 2) + result;

    return aux(Math.floor(n / 2));
  };

  aux(n);

  return Number(result);
};

/** 레퍼런스 */
const reference = (n) => {
  let answer = '';
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
};

/** 테스트 케이스1 */
let n = 11;

console.log('1:', solution1(n)); // 1011
console.log('1:', reference(n)); // 1011
