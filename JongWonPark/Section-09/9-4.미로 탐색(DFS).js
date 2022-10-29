/*
[문제] 미로 탐색(DFS) - DFS
- 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.
- 출발점은 격자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다.
- 격자판의 1은 벽이고, 0은 통로이다. 격자판의 움직임은 상하좌우로만 움직인다.

[입력]
- 7*7 격자판의 정보가 주어집니다.

[출력]
- 첫 번째 줄에 경로의 가지수를 출력한다.

[입력예제 1]
- [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ]

[출력예제 1]
- 8
*/

/** 풀이1 */
const solution1 = (board) => {
  let result = 0;
  board[0][0] = 1;

  const aux = ([x, y]) => {
    if (x === 6 && y === 6) {
      result++;
    } else {
      if (x > 0 && board[y][x - 1] === 0) {
        board[y][x - 1] = 1;
        aux([x - 1, y]);
        board[y][x - 1] = 0;
      }
      if (x < 6 && board[y][x + 1] === 0) {
        board[y][x + 1] = 1;
        aux([x + 1, y]);
        board[y][x + 1] = 0;
      }
      if (y > 0 && board[y - 1][x] === 0) {
        board[y - 1][x] = 1;
        aux([x, y - 1]);
        board[y - 1][x] = 0;
      }
      if (y < 6 && board[y + 1][x] === 0) {
        board[y + 1][x] = 1;
        aux([x, y + 1]);
        board[y + 1][x] = 0;
      }
    }
  };

  aux([0, 0]);

  return result;
};

/** 레퍼런스 */
const reference = (board) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
};

/** 테스트 케이스1 */
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log('1:', solution1(board)); // 8
console.log('1:', reference(board)); // 8
