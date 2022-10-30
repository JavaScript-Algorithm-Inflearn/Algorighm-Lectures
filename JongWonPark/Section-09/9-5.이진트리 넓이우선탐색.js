/*
[문제] 이진트리 넓이우선탐색 - BFS
- 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
- 주어진 이진트리는 높이가 3인 포화이진트리이다.
- 루트 노드의 값은 1이다.
- 왼쪽 자식 노드의 값은 (부모 노드의 값 * 2), 오른쪽 자식 노드의 값은 (부모 노드의 값 * 2 + 1)이다.

[입력]
- 루트 노드를 입력한다.

[출력]
- 탐색 순서를 출력한다.

[입력예제 1]
- 없음

[출력예제 1]
- [1, 2, 3, 4, 5, 6, 7]
*/

/** 풀이1 */
const solution1 = () => {
  const result = [];
  const queue = [1];

  while (queue.length > 0) {
    const vertex = queue.shift();
    result.push(vertex);
    if (vertex * 2 <= 7) queue.push(vertex * 2);
    if (vertex * 2 + 1 <= 7) queue.push(vertex * 2 + 1);
  }

  return result;
};

/** 레퍼런스 */
const reference = () => {
  let answer = '';
  let queue = [];
  queue.push(1);
  while (queue.length) {
    console.log(queue);
    let v = queue.shift();
    answer += v + ' ';
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
};

/** 테스트 케이스1 */
console.log('1:', solution1()); // [1, 2, 3, 4, 5, 6, 7]
console.log('1:', reference()); // '1, 2, 3, 4, 5, 6, 7'
