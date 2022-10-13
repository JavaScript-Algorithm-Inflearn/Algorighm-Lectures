/*
[문제]
10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용해서 출력해야 합니다.
*/

/*
// 나의 풀이
1. recursive(N)이 호출된다.
2. if 조건에 n이 부합하는지 확인한다. 맞다면 return
3. 아니라면 아래 recursive 함수에 n/2 를 전달하여 호출
4. 탈출 조건이 되었을 때 순차적으로 String(n%2) 를 더한 값을 리턴하면서 최종적으로 1011을 리턴한다.
*/
function solution(N) {
  function recursive(n) {
    if (n <= 0) return '';

    return recursive(parseInt(n / 2)) + String(n % 2);
  }
  return recursive(N);
}

const result = solution(11);
console.log(result);

// reference
function reference(N) {
  let answer = '';
  function recursive(n) {
    if (n === 0) return;
    else {
      recursive(parseInt(n / 2));
      answer += n % 2;
    }
  }
  recursive(N);
  return answer;
}

const refResult = reference(11);
console.log(refResult);

// 스코프 규칙에 의하여 recursive 는 바깥 스코프의 answer 변수에 접근할 수 있다.
