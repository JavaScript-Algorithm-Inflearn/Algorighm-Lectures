/*
[문제] 경로 탐색(인접리스트) - DFS
- 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
- 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 총 6가지입니다.
- 1 2 3 4 5
- 1 2 5
- 1 3 4 2 5
- 1 3 4 5
- 1 4 2 5
- 1 4 5

[입력]
- 첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연결정보가 주어진다.

[출력]
- 총 가지수를 출력한다.

[입력예제 1]
- 5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]

[출력예제 1]
- 6
*/

/** 풀이1 */
const solution1 = (n, arr) => {
  const graph = new Array(n + 1).fill(0).map((e) => []);
  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  let result = 0;
  let isVisited = new Array(n + 1).fill(0);
  isVisited[1] = 1;

  const aux = (vertex) => {
    if (vertex === n) {
      result++;
    } else {
      for (const x of graph[vertex]) {
        if (isVisited[x] === 0) {
          isVisited[x] = 1;
          aux(x);
          isVisited[x] = 0;
        }
      }
    }
  };

  aux(1);

  return result;
};

/** 레퍼런스 */
const reference = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          path.push(nv);
          ch[nv] = 1;
          DFS(nv);
          ch[nv] = 0;
          path.pop();
        }
      }
    }
  }
  ch[1] = 1;
  path.push(1);
  DFS(1);
  return answer;
};

/** 테스트 케이스1 */
let n = 5;
let arr = [
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

console.log('1:', solution1(n, arr)); // 6
console.log('1:', reference(n, arr)); // 6
