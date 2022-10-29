/*
[문제] 섬나라 아일랜드 DFS

N * N 의 섬나라 아일랜드 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며, 0은 바다입니다.
섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.

*/

const map = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

function island(map) {
  let count = 0;
  let n = map.length;
  // 12시 1시 3시 4시 6시 7시 9시 11시 ... 8방향으로 돌아감.
  let dx = [0, +1, +1, +1, 0, -1, -1, -1];
  let dy = [-1, -1, 0, +1, +1, +1, 0, -1];

  // DFS가 돌면서 탐색이 시작되는 현재 위치는 0으로 초기화
  function DFS(x, y) {
    map[x][y] = 0;
    // 시계방향으로 돌아가면서 그 주변의 경로를 모두 탐색해서 뻗어나감
    // 여기에 대한 탐색이 다 끝나면 종료
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && map[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  // 행과 열에 대해서 DFS 탐색을 하기 위해서 반복문을 돌림.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) {
        count++;
        DFS(i, j);
      }
    }
  }
  return count;
}

const result = island(map);
console.log(result);
