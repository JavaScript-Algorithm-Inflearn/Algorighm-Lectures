/*
[문제] 경로 탐색(DFS-인접행렬: 노드개수가 적을 때)

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

// reference 분석 코드
const graphMatrix = (nodes, edges, directions) => {
  // 노드의 갯수만큼 행렬을 만든다.
  let graph = Array.from(Array(nodes + 1), () => new Array(nodes + 1).fill(0));

  // 현재 탐색 경로에서 이전에 탐색한 노드인지 아닌지 체크하기 위한 배열
  const visited = new Array(nodes + 1).fill(0);

  // 전체 경로 확인을 위한 배열
  const path = [];

  // 총 도달할 수 있는 횟수를 묻는 문제이므로, 카운트 변수가 필요하다.
  let count = 0;

  // directions를 바탕으로 인접 행렬을 만든다.
  for (let [a, b] of directions) {
    graph[a][b] = 1;
  }

  // v => 재귀가 돌 때마다 하나씩 추가되면서, 출발점이 되는 노드를 가리킴
  function DFS(v) {
    if (v === nodes) {
      count++;
      console.log(path);
    } else {
      // 1부터 n까지 반복문을 돌면서 목적 지점이 될 노드를 특정짓는다.
      // v => i 로 갈 때, 그래프에서 연결이 되어 있다면 진행가능, 아니라면 진행 불가능이다.(다음 목적지 노드로 넘어간다.)
      for (let i = 1; i <= nodes; i++) {
        // 다음 경로로 넘어갈 수 있는 경우
        if (graph[v][i] === 1 && visited[i] === 0) {
          // 목적 노드에 방문을 할거니까 해당 노드에 방문 표시를 한다.
          visited[i] = 1;
          // 다시 그 해당 노드를 출발점으로 하여 다음 경로 탐색으로 넘어간다.
          path.push(i);
          DFS(i);
          // DFS가 끝났다면, 방문 처리를 풀어준다.(갔다왔으니깐)
          visited[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  // 1번 배열에서 출발하기 때문에 무조건 1을 체크하고 시작하자!
  visited[1] = 1;
  DFS(1);

  return count;
};

let result = graphMatrix(5, 9, directions);
console.log(result);

/*
[메모]
- 처음 작성한 코드. 이렇게 작성하니까 이 두번째 fill에서 생성된 배열의 주소값이 공유되는건지..이런,,현상이..

const tmp = new Array(nodes + 1).fill(new Array(nodes + 1).fill(0));

- 아래는 강사님의 코드
- Array.from 으로 작성됨.
- Array.from(arrayLike, 맵핑 함수(옵셔널))
- 아래 경우에는 nodes+1 만큼 0으로 채워진 배열을 만드는 함수가 맵핑 함수로 전달중..
- 이 맵핑 함수의 경우에는 Array 앞에 new를 붙이던 붙이지 않던 똑같은 결과가 나왔다.

let graph = Array.from(Array(nodes + 1), () => Array(nodes + 1).fill(0));
*/
