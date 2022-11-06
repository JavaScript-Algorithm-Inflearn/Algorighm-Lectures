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

  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) {
        count++;
        map[i][j] === 0;
        // 현재 출발 경로를 queue에 추가
        queue.push([i, j]);
        // queue에서 꺼내면서 그와 연관된 자식을 넣는 방식이기 때문에, 연관된 자식경로가 없다면 queue에서 요소가 빠지고 끝남.
        while (queue.length) {
          // 출발 경로를 shift 하여 x좌표, y좌표 분리한 다음에 탐색할 8방향으로 반복을 돌면서 queue에 추가한다
          let [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && map[nx][ny] === 1) {
              map[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return count;
}

const result = island(map);
console.log(result);
