/*
[문제] 괄호 문자 제거 - 스택
- 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.


[입력]
- 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

[출력]
- 남은 문자만 출력한다.

[입력예제 1]
- '(A(BC)D)EF(G(H)(IJ)K)LM(N)'

[출력예제 1]
- 'EFLM'
*/

/** 풀이1 - 시간복잡도 N */
const solution = (s) => {
  const stack = [];

  for (const x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(x);
    }
  }

  return stack.join("");
};

/** 테스트 케이스1 */
let s = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

console.log(1, solution(s)); // 'EFLM'
