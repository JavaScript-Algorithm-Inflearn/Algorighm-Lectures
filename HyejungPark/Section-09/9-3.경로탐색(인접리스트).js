/*
[문제] 경로탐색 - 인접리스트 ( 노드 개수 많을 때)

노드의 갯수가 10,000 개 정도가 된다면 비효율적이다.

방향 그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는

1 2 3 4 5
1 2 5
1 3 4 2 5
1 3 4 5
1 4 2 5
1 4 5

총 6가지 입니다.

▣ 입력설명
첫째 줄에는 정점의 수(1<=N<=20)와 간선의 수 M이 주어진다. 그 다음부터 M줄에 걸쳐 연결 정보가 주어진다.

▣ 출력설명
총 가지 수를 출력한다.

▣ 입력 예제
5 9 (정점의 수, 간선의 수 => 5개의 노드가 있고, 그 노드끼리 이어잔 간선이 총 9개 이다.)

1 => 2
1 => 3
1 => 4
2 => 1
2 => 3
2 => 5
3 => 4
4 => 2
4 => 5

▣ 출력 예제
6

*/

/*
인접 리스트

2차원 배열을 만들어서, 그 행의 번호는 node번호가 되고 그 행의 요소 안에 갈 수 있는 노드 번호가 포함되는 방식.

*/

const directions = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

function graphList(n, directions) {
  let count = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let visited = Array.from(Array(n + 1)).fill(0);
  let path = [];

  for (let [a, b] of directions) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      count++;
      console.log(path);
    } else {
      // graph[v] 리스트가 갈 수 있는 목적지에 대한 정보를 담고있다.
      // 따라서 graph끼리 연결되어있는지 인덱스로 확인할 필요가 없음. 그냥 현재 경로에서 방문 했는지, 하지 않았는지만 체크하면 된다.
      for (let i = 0; i < graph[v].length; i++) {
        if (visited[graph[v][i]] === 0) {
          visited[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          visited[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  visited[1] = 1;
  DFS(1);
  return count;
}

const result = graphList(5, directions);
console.log(result);
