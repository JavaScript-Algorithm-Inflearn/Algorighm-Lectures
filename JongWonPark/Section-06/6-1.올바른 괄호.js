/*
[문제] 올바른 괄호 - 스택
- 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
- (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.


[입력]
- 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.

[출력]
- 첫 번째 줄에 YES, NO를 출력한다.

[입력예제 1]
- '(())()'

[출력예제 1]
- 'YES'

[입력예제 2]
- '(()()))'

[출력예제 2]
- 'NO'

[입력예제 3]
- '(()(()))(()'

[출력예제 3]
- 'NO'
*/

/** 풀이1 - 시간복잡도 N */
const nativeSolution = (s) => {
  let open = 0;
  let close = 0;

  for (const x of s) {
    if (x === "(") open++;
    if (x === ")") close++;

    // 닫는 괄호의 수가 여는 괄호의 수보다 크면 'NO' 반환
    if (open < close) return "NO";
  }

  if (open !== close) return "NO";

  return "YES";
};

/** 풀이2 - 스택 이용. 시간복잡도 N */
const solution = (s) => {
  const stack = [];

  for (const x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

/** 테스트 케이스1 */
let s = "(())()";

console.log(1, nativeSolution(s)); // 'YES'
console.log(1, solution(s)); // 'YES'

/** 테스트 케이스2 */
s = "(()()))";

console.log(2, nativeSolution(s)); // 'NO'
console.log(2, solution(s)); // 'NO'

/** 테스트 케이스3 */
s = "(()(()))(()";

console.log(3, nativeSolution(s)); // 'NO'
console.log(3, solution(s)); // 'NO'
