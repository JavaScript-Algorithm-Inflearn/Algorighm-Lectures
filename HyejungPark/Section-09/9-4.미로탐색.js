/*
[문제] 미로탐색 -DFS

7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 

출발점은 격자의 (1,1)좌표이고, 탈출 도착점은 (7,7) 좌표입니다.

격자판의 1은 벽이고, 0은 통로입니다.
격자판의 움직임은 상하좌우로만 움직입니다.

[입력 설명]
7*7 격자판의 정보가 2차원 배열로 주어집니다.

[출력 설명]
해당 격자판에서 1,1 => 7,7 로 갈 수 있는 경로의 가지수를 출력하세요.
*/

/*
- 이 문제에서 격자판을 이차원 배열로 본다면, 시작 좌표와 종료좌표는 board[0][0], board[6][6]이 될 것입니다.

- 미로 탈출 경로를 트리의 루트 노드에서 가장 말단 노드까지 연결되는 경로라고 생각하면, 깊이 우선 탐색을 쓰는 것이 맞음.(이전 노드를 기억하면서 가야되기 때문에)

- DFS 함수는 x와 y 좌표를 받는다. 종료조건은 탈출 지점의 좌표가 board[6][6]이기 때문에 x === 6 && y === 6 이 된다. 

- 재귀 반복 조건에서는 현재 좌표로 부터 탐색할 다음 좌표를 제시하여 DFS 탐색을 이어가야 한다. 이때 이동할 수 있는 경로가 상하좌우 이므로! for문을 돌려서 그에 맞는 좌표를 만든 뒤에 DFS로 넘겨준다.

- 추가적으로 이전에 방문했던 경로를 다시 돌아가서 반복하면 안되기 때문에 임시로 현재 위치를 1로 바꾼 다음에 탐색이 끝나서 돌아오면 0으로 바꿔준다.

- 이렇게 해서 DFS를 출발지점 즉 DFS(0,0)으로 호출하면 조건에 부합했을 때 카운팅이 추가되면서 탈출 횟수를 구할 수 있다.

*/

const array = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

function solution(array) {
  let count = 0;
  // 12시, 3시, 6시, 9시 방향
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  function DFS(x, y) {
    if (x === 6 && y === 6) count++;
    else {
      for (let k = 0; k < 4; k++) {
        // 다음 재귀에서 돌아야 할 방향을 제시한다.
        let nx = x + dx[k];
        let ny = y + dy[k];
        // 아닌 경우를 거르지 말고, 조건에 부합할때만 코드가 돌아가도록 짜는게 더 좋겠다. 주의!
        // nx,와 ny가 경로를 벗어나지 않으면서, 탐색하려는 지점의 값이 0인 경우 DFS 경로 탐색을 진행한다.
        if (nx >= 0 && ny >= 0 && nx <= 6 && ny <= 6 && array[nx][ny] === 0) {
          // 일단 내가 방문할 지점이니까, 왔던 길을 되돌아가지 않도록 1을 만들어주고,
          array[nx][ny] = 1;
          DFS(nx, ny);
          // 해당 경로에 대한 탐색이 끝났다면 현재 nx,ny 지점에 대해 다시 0으로 돌려준다.
          array[nx][ny] = 0;
        }
      }
    }
  }
  array[0][0] = 1;
  DFS(0, 0);

  return count;
}

const result = solution(array);
console.log(result);
