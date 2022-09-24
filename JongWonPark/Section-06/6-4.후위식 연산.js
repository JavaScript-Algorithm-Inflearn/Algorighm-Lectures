/*
[문제] 후위식 연산 - 스택
- 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
- 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.


[입력]
- 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
- 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

[출력]
- 연산한 결과를 출력합니다.

[입력예제 1]
- '352+*9-'

[출력예제 1]
- 12
*/

/** 풀이1 - 시간복잡도 N */
const solution = (s) => {
  const stack = [];

  for (const x of s) {
    if (isNaN(Number(x))) {
      const right = stack.pop();
      const left = stack.pop();

      switch (x) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "*":
          stack.push(left * right);
          break;
        case "/":
          stack.push(left / right);
          break;
      }
    } else {
      stack.push(Number(x));
    }
  }

  return stack.pop();
};

/** 테스트 케이스1 */
let s = "352+*9-";

console.log(1, solution(s)); // 12
