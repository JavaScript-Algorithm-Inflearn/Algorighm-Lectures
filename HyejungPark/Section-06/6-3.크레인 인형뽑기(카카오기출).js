/**
[문제] 크레인 인형뽑기 

게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.

게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. 
(위 그림은 5 x 5 크기의 예시입니다). 
각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 
모든 인형은 1 x 1 크기의 격자한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 
게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 
집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다. 
다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.

만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 
위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.

크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 또한 바구니는 모든 인형이 들어갈 수 있을만큼 충분히 크다고 가정합니다. (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 ** 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.
board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
0은 빈 칸을 나타냅니다.
1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
moves 배열의 크기는 1 이상 1,000 이하입니다.
moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다

▣ 입력예제 1
[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] //board 배열
[1,5,3,5,1,2,1,4] //moves 배열

▣ 출력예제 1
4
*/

/*
[풀이 해설]

1. N * N의 행렬이 존재할 때, moves로 받고있는 '크레인의 위치' 는 i번째 행의 인덱스가 된다.

2. 크레인의 위치에서 맨 위부터 시작해 인형이 존재할 때 까지 아래로 파고들기 때문에,
... 전체 board를 반복해서, board[i][move - 1] 로 접근해야한다. 
... moves로 들어오는 각 값을 0번째부터 시작하는 배열의 인덱스로 접근하기 위해서 -1을 해준다.

3. 크게 두 가지 경우로 분기할 수 있다. board[i][move - 1] 이 존재하느냐, 존재하지 않느냐.
... 존재하지 않는다면, 존재하는 i번째 행에 도달할 때 까지 board의 i로 반복을 진행한다.

4. 값이 존재한다면, 즉 인형을 찾았다면 board[i][move - 1]은 꺼내었다는 표시로 0으로 초기화한다. 값이 존재할 때에도 두 가지 경우로 분기할 수 있다. 바구니(스택)에 지금 넣을 인형과 같은 인형이 존재하느냐, 존재하지 않느냐.

5 - 1. 존재하지 않는 경우, stack에 인형 값을 바로 추가해주면 된다.
5 - 2. 존재하는 경우, stack.pop()을 한 뒤에 카운트를 2번 추가한다. (사라지는 인형의 갯수를 세어야하기 때문에.)

*/

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution1(board, moves) {
  // 인형을 담을 바구니 배열과 카운트 변수 선언
  const bascket = [];
  let count = 0;

  // moves 배열을 pos 로 하나씩 반복한다.
  for (let pos of moves) {
    // board 의 각 행을 i로 반복한다.
    for (let i = 0; i < board.length; i++) {
      // 해당 칸에 인형이 존재할 때 target에 임시로 저장하고, 해당 자리를 0으로 초기화
      if (board[i][pos - 1]) {
        let target = board[i][pos - 1];
        board[i][pos - 1] = 0;
        // 바구니의 마지막 요소가 뽑으려는 인형이랑 같으면
        if (bascket[bascket.length - 1] === target) {
          // 바구니에서 마지막 요소를 뺀다음 카운트를 올린다.
          bascket.pop();
          count += 2;
        }
        // 뽑으려는 인형이랑 마지막 요소가 다르다면 바구니에 넣는다.
        else {
          bascket.push(target);
        }
        break;
      }
      // 인형이 존재하지 않으면 다음 행으로 넘어감.
      else {
        continue;
      }
    }
  }
  return count;
}

const result1 = solution1(board, moves);
console.log(result1);

/*
[메모]
- 인덱스 접근이 뭔가 잘못되고 있다??
=> 중첩 반복문일 때 move를 계속 마이너스 하고 있어서 잘못되고 있는 것 같다. (??)
=> 인형이 존재하면 다음 move로 이어갈 수 있게 break 실행문을 추가시켰다.

- 카운트가 제대로 추가되지 않는 이유는, 문제 요구사항이 '터뜨린 인형의 갯수' 이기 때문.
... 한 번 에 두 개의 인형을 터뜨리게 되므로, 카운트도 2번씩 증가해야한다.

- 프로그래머스에서 테스트케이스 3,4,5를 제외하고 통과가 되지 않았다 ㅜ. 뭐가문제지?
=> 먼저 board에서 꺼내면 꺼낸 자리는 0으로 초기화를 시켜줘야함.
*/
