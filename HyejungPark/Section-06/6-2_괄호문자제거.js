/*
[문제]
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
*/

const str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

// 시도 1
// str을 탐색하면서 올바른 괄호 쌍이 이루어지면 그 다음부터 새로운 괄호가 등장하기 전까지의 문자열을 answer 에 추가하여 리턴.
function solution1(str) {
  const stack = [];
  let answer = '';
  // str 문자열을 탐색
  for (let i = 0; i < str.length; i++) {
    // 만약 stack에 요소가 존재하지 않거나, 현재 요소가 괄호가 아닌 경우 괄호 밖에 존재하는 요소이므로 answer에 추가
    // stack에 요소가 존재하지 않는다는것은 이미 만들어진 괄호 쌍이 삭제되었다는 의미.
    if (stack.length === 0 && str[i] !== '(' && str[i] !== ')') {
      answer += str[i];
      continue;
    }
    // 만약 현재 i 가 괄호의 시작점이라면, stack에 추가하고, i가 괄호의 닫는 지점이라면 stack 요소를 제거하여 올바른 괄호 쌍을 만든다.
    if (str[i] === '(') stack.push(str[i]);
    else if (str[i] === ')') {
      stack.pop();
    }
  }
  return answer;
}

const result1 = solution1(str);
console.log(result1);

//////////////////////////////////////////////////////////
// 시도 2 : 레퍼런스 코드
// 여는 괄호를 포함해 모든 문자열을 stack에 추가
// 닫는 문자열이 나왔을 때 다시 여는 문자열이 나올 때 까지 stack.pop()
// 최종적으로 stack에 남은 문자열이 괄호영역 바깥의 문자열이 됨.

function solution2(str) {
  const stack = [];
  for (let x of str) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }

  return stack.join('');
}

const result2 = solution2(str);
console.log(result2);
