/*
[문제]
정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다.
정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다. 

정보왕국의 왕은 다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.

- 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 
- 그리고 1번 왕자부터 N번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다. 
- 그리고 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다. 
- 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다. 
- 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
- 이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.

예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 
처음에는 3번 왕자가 3을 외쳐 제외된다. 
이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7번 왕자에게 공주를 구하러갑니다.
N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.

▣ 입력설명
첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.

▣ 출력설명
첫 줄에 마지막 남은 왕자의 번호를 출력합니다.

▣ 입력예제 1
8 3

▣ 출력예제 1
7
*/

/*
[메모]
1. front, rear 두 개의 포인터를 가리켜 원형 큐 방식으로 구현할 수도 있을 것 같다.
(원형 큐가 어려워서 로직만 짜다가 끝났다..)

[풀이 설명]
1. 1 부터 N 까지 요소가 하나씩 들어있는 큐(배열) 생성.
2. 큐에 1개의 요소가 남을 때까지, K-1 앞에 있는 요소들은 다시 큐의 뒤로 push 하고
K-1 번째 요소는 shift로 완전 삭제한다.
3. 최종적으로 남은 1개의 요소가 정답이 됨.

1 2 3 4 5 6 7 8 
=> 4 5 6 7 8 1 2
=> 7 8 1 2 4 5
=> 2 4 5 7 8
=> 7 8 2 4
=> 4 7 8
=> 4 7
=> 7

=> K 이전까지 배열 안족에서 뒷쪽으로 옮겨주고, K에 해당하는 요소만 제거.
반복하면 결국에는 하나의 요소만 남기 때문에 종료조건이 된다. 

*/

const N = 8;
const K = 3;

function solution1(N, K) {
  const queue = [];
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  // queue의 길이가 1이 될때까지 반복
  while (queue.length !== 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.shift());
    }
    console.log(queue);
    queue.shift();
  }

  return queue;
}
const result1 = solution1(N, K);
console.log(result1);
