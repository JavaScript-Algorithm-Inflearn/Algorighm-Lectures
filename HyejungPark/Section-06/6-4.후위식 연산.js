/*
[문제] 후위식 연산(postfix) [Stack]

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

▣ 출력설명
연산한 결과를 출력합니다.

▣ 입력예제 1
352+*9-

▣ 출력예제 1
12
*/

const postfix = '36-';

// 시도 1
// 예제와 같은 답이 나오긴 했지만 풀이에 확신이 없다.
// stack에서 나오는 순서와 연산의 순서가 반대임을 기억해야함!
// 먼저 pop해서 나온 쪽이 오른쪽 피연산자, 그 다음에 나온 값이 왼쪽 피연산자가 된다.
function solution1(postfix) {
  let stack = [];

  for (let el of postfix) {
    // el 이 숫자일 때
    if (!isNaN(el)) {
      // stack에 현재 숫자 추가
      stack.push(Number(el));
    }
    // el이 연산자일 때
    else {
      let right = stack.pop();
      let left = stack.pop();
      switch (el) {
        case '+':
          stack.push(left + right);
          break;
        case '-':
          stack.push(left - right);
          break;
        case '*':
          stack.push(left * right);
          break;
        case '/':
          stack.push(left / right);
          break;
        default:
          break;
      }
    }
  }
  return stack.join('');
}

const result1 = solution1(postfix);
console.log(result1);

/*
[메모]

** 후위표기식이란??

- 3*(5+2)-9 처럼 우리가 흔히 알고있는 연산의 표기 방식을 "중위표기식" 이라고 한다.
- 단어의 뜻을 유추해보면, 피연산자 사이에 연산자가 들어갈 경우 중위표기식, 
... 피연산자들 뒤에 연산자들이 위치하면 후위표기식이라고 할 수 있음
- 후위표기식은 컴퓨터가 알아먹기 쉬운 연산 방법이다.

- 그러면, 후위표기식을 어떻게 계산하느냐???
~ 앞에서 부터 읽으면서 피연산자를 스택에 쌓는다.
~ 연산자를 만나면 스택에서 피연산자 두 개를 꺼내어 연산 수행 후 다시 스택으로 ㄱㄱ
~ 두 개의 피연산자를 꺼낸다는건 먼저 들어간 녀석들부터 꺼내는거임.
즉 앞에서 부터 두개 뺐다가 연산해서 다시 뒤로 넣어줌. 

Q. 스택은 쌓은 뒤 가장 마지막 요소를 빼야되는게 아닌가?? 먼저들어온 요소를 빼는 것이 맞는가? => 일단해보자.
=> 먼저 들어간 두 요소끼리의 연산이 필요한 것 같다.

=> isNaN으로 문자열의 숫자, 문자여부 판별할 때 굳이 Number로 변환하지 않아도 됨! 그냥 isNaN('x') 과 같이 넣으면 숫자로 변환한 뒤에 여부를 판별한다.

*/
