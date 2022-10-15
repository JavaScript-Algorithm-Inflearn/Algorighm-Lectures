/*
[문제] 부분집합 구하기 DFS

자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요. 

*/

function subset(N) {
  const arr = new Array(N).fill(0);

  function DFS(n) {
    if (n >= N + 1) {
      let answer = '';
      arr.forEach((el, i) => {
        answer += el === 1 ? i + ' ' : '';
      });
      return answer.length > 0 ? console.log(answer) : null;
    } else {
      // 현재 숫자를 포함하는 경우
      arr[n] = 1;
      DFS(n + 1);

      // 현재 숫자를 포함하지 않는 경우
      arr[n] = 0;
      DFS(n + 1);
    }
  }
  return DFS(1);
}

const result = subset(3);

/*
- 1부터 N까지의 각각의 숫자는 부분집합에 참여한다, 참여하지 않는다
두 가지의 경우의 수를 가진다. 
- 이 경우의 수를 나열하면 이진 트리가 되므로 해당 문제는 이진 트리 DFS 로 풀 수 있는 것임.
- ** 참여 여부를 확인할 수 있는 것은 1부터 N 까지의 배열을 만드는 것. 참여하는 경우라면 n 번째에 해당하는 값을 1로, 참여하지 않는다면 0으로 둔다.
- 재귀 함수 바깥 스코프의 변수에 접근할 수 있다는 규칙을 참고해 방문 여부를 기록할 수 있는 배열을 선언해두는게 중요하다!

*/
