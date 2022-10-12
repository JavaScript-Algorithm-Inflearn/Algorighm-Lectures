/*
[문제]
자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지 출력하는 프로그램을 작성하세요.
*/

function recursive(N) {
  if (N <= 0) return;
  recursive(N - 1);
  console.log(N);
}

const result = recursive(3);

/*
[재귀함수와 스택프레임]
- 함수가 호출되면 콜 스택 프레임 안에 쌓인다.
- 하나의 실행 컨택스트 안에는 스코프 내에서 접근할 수 있는 매개변수와 지역변수
... 그리고 실행이 종료되었을 때 다음에 실행될 복귀주소를 가지고 있다.
- recursive(N)이 실행되면
... if 조건문으로 return되어야 하는지 확인한다.
... recursive(N-1)이 실행된다.
... N <= 0이 될 때까지 N - 1이 되는 값이 계속해서 recursive에 호출되고,
... return이 되면 그 다음 복귀주소인 console.log(N)을 실행한 뒤에 모든 재귀함수가 종료된다.
*/
