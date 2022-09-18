/*
[문제]
괄호가 입력되었을 때, 올바른 괄호이면 'YES' 올바르지 않으면 'NO'를 출력합니다.

- (())() 는 괄호의 쌍이 올바르게 위치함.
- (()())) 는 괄호의 쌍이 올바르지 못함.
- 여러개의 괄호가 모두 제 짝이 있어 열림 - 닫힘이 표현되면 올바른 괄호라고 할 수 있음.
*/

const str = '(()(()))(()';

// map 객체를 활용한 풀이
function solution1(str) {
  // 괄호 문자열을 모두 split 하여 배열로 만든다.
  const parentheses = str.split('');
  let maps = new Map();
  // 괄호 배열을 반복하며 포함 갯수를 센 map 객체를 만든다.
  for (let p of parentheses) {
    if (maps.has(p)) maps.set(p, maps.get(p) + 1);
    else maps.set(p, 1);
  }

  // 두 개의 괄호 포함 갯수가 다르면 NO를 리턴한다.
  // 같을 경우 YES를 리턴한다.
  if (maps.get('(') !== maps.get(')')) return 'NO';

  return 'YES';
}

const result1 = solution1(str);
console.log(result1);

// 스택 자료구조 활용한 풀이
function solution2(str) {
  // 자바스크립트에서 스택은 배열에서의 push와 pop으로 간단히 구현할 수 있다.
  const stack = [];
  // str을 l 로 반복하면서, l이 여는 괄호일 경우 stack 에 추가,
  // 닫는 괄호일 경우 stack에서 pop하여 하나를 제거.
  // 성공적인 괄호라면 여는 괄호와 닫는 괄호의 갯수가 같으므로
  // stack의 길이가 0일 것이다.
  for (let l of str) {
    if (l === '(') stack.push(l);
    else {
      // 실패한 괄호 중 닫는 괄호가 더 많을 경우가 있을 수 있으므로, 스택의 길이를 체크.
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  // stack의 길이가 0이 아닌 경우는 실패한 괄호이므로 false.
  if (stack.length > 0) return 'NO';

  return 'YES';
}

const result2 = solution2(str);
console.log(result2);

/*
이 문제에서 스택 자료구조를 사용하는게 좋은 이유... (스스로 생각해봄)
- map 자료구조를 사용하면 전체 문자열에 대해 탐색 + map 자료구조 안에서 검색을 위해 또 탐색이 필요하기 때문에 성능이 좋지 않을 것 같다. 

- 스택 자료구조의 경우 (이 문제에서는) 배열의 탐색이 추가로 필요하지 않고, 경우에 따라서 모두 비교하지 않고 early return 도 가능하기 때문에 map 자료구조 보다는 성능이 좋지 않을까 싶다.
*/

/*
[스택 자료구조]
- 후입 선출 => 나중에 들어온 데이터(push)가 먼저 나가는(pop) 자료구조.
- 쌓여있는 박스를 꺼낼 때 맨 위에 있는 것 부터 꺼내는 것을 생각하면 이해가 쉽다.
- 스택에서 [i] 번째 요소에 접근하기 위해서는 O(n) 만큼이 걸리지만, 기본적인 연산 - 자료의 추가와 삭제는 상수시간 (O(1))에 가능하다. => 맨 뒤에 자료를 추가하고, 맨 뒤 자료를 제거하기 때문. 
- 스택 자료구조가 있기 때문에 재귀 알고리즘을 반복적으로 구현할 수 있다. 콜스택에 함수가 쌓이면서 나중에 실행된 것들이 하나씩 pop 되며 결과를 도출한다. 

[참고링크]
https://velog.io/@alkwen0996/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%8A%A4%ED%83%9DStack
*/
