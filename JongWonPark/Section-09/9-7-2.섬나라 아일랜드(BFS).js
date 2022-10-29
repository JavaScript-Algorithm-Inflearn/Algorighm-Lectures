/*
[문제] 섬나라 아일랜드 - BFS
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
  const boardCopy = JSON.parse(JSON.stringify(board));
  const N = boardCopy.length;
  const queue = [];
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (boardCopy[y][x] === 1) {
        boardCopy[y][x] = 0;
        queue.push([x, y]);

        while (queue.length > 0) {
          const [curX, curY] = queue.shift();
          for (let i = 0; i < 8; i++) {
            const nx = curX + dx[i];
            const ny = curY + dy[i];
            if (
              nx >= 0 &&
              nx < N &&
              ny >= 0 &&
              ny < N &&
              boardCopy[ny][nx] === 1
            ) {
              boardCopy[ny][nx] = 0;
              queue.push([nx, ny]);
            }
          }
        }

        result++;
      }
    }
  }

  return result;
};

/** 레퍼런스 */
const reference = (board) => {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          let x = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x[0] + dx[k];
            let ny = x[1] + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
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
