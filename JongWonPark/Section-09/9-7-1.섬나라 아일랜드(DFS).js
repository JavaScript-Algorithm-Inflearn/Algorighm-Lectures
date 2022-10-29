/*
[문제] 섬나라 아일랜드 - DFS
- N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다.
- 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며, 0은 바다입니다.
- 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.

[입력]
- 첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다.
- 두 번째 줄부터 격자판 정보가 주어진다.

[출력]
- 첫 번째 줄에 섬의 개수를 출력한다.

[입력예제 1]
- [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ]

[출력예제 1]
- 5
*/

/** 풀이1 */
const solution1 = (board) => {
  let result = 0;
  // board 깊은 복사
  const boardCopy = JSON.parse(JSON.stringify(board));
  // board의 크기
  const N = boardCopy.length;

  // x: 가로 방향 (동쪽이 +)
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  // y: 세로 방향 (남쪽이 +)
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  const aux = (x, y) => {
    // 현재 좌표는 0으로 초기화하여 다시 확인하지 않도록 한다.
    boardCopy[y][x] = 0;

    // 현재 좌표의 북, 북동, 동, 남동, 남, 남서, 서, 북서 순으로 섬인지 확인한다. (시계 방향)
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      // 확인 중인 좌표가 board 안에 있고, 섬이라면 그 좌표에 대해 aux 함수를 실행한다.
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && boardCopy[ny][nx] === 1) {
        aux(nx, ny);
      }
    }
  };

  // board의 모든 좌표를 확인한다.
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      // 섬인 경우 aux 함수를 실행한다.
      if (boardCopy[y][x] === 1) {
        result++;
        aux(x, y);
      }
    }
  }

  return result;
};

/** 레퍼런스 */
const reference = (board) => {
  let answer = 0;
  let n = board.length;
  // x: 세로 방향 (남쪽이 +)
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  // y: 가로 방향 (동쪽이 +)
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++;
        DFS(i, j);
      }
    }
  }
  return answer;
};

/** 테스트 케이스1 */
let board = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log('1:', solution1(board)); // 5
console.log('1:', reference(board)); // 5
