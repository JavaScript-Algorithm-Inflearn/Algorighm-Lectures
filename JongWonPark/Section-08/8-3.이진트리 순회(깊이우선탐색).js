/*
[문제] 이진트리 순회 - DFS
- 아래 그림과 같은 이진트리를 전위순회, 중위순회, 후위순회를 연습해보세요.
- 주어진 이진트리는 높이가 3인 포화이진트리이다.
- 루트 노드의 값은 1이다.
- 왼쪽 자식 노드의 값은 (부모 노드의 값 * 2), 오른쪽 자식 노드의 값은 (부모 노드의 값 * 2 + 1)이다.

[입력]
- 루트 노드를 입력한다.

[출력]
- 각 순회에 따라 탐색 순서를 출력한다.

[입력예제 1]
- 전위순회: 1
- 중위순회: 1
- 후위순회: 1

[출력예제 1]
- 전위순회: [1, 2, 4, 5, 3, 6, 7]
- 중위순회: [4, 2, 5, 1, 6, 3, 7]
- 후위순회: [4, 5, 2, 6, 7, 3, 1]
*/

/** 전위순회 */
const preorder = (vertex) => {
  const result = [];

  const aux = (vertex) => {
    if (vertex > 7) return;

    result.push(vertex);
    aux(vertex * 2);
    aux(vertex * 2 + 1);
  };

  aux(vertex);

  return result;
};

/** 레퍼런스 전위순회 */
const referencePreorder = (n) => {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + ' ';
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
};

/** 중위순회 */
const inorder = (vertex) => {
  const result = [];

  const aux = (vertex) => {
    if (vertex > 7) return;

    aux(vertex * 2);
    result.push(vertex);
    aux(vertex * 2 + 1);
  };

  aux(vertex);

  return result;
};

/** 레퍼런스 중위순회 */
const referenceInorder = (n) => {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      answer += v + ' ';
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
};

/** 후위순회 */
const postorder = (vertex) => {
  const result = [];

  const aux = (vertex) => {
    if (vertex > 7) return;

    aux(vertex * 2);
    aux(vertex * 2 + 1);
    result.push(vertex);
  };

  aux(vertex);

  return result;
};

/** 레퍼런스 후위순회 */
const referencePostorder = (n) => {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer += v + ' ';
    }
  }
  DFS(n);
  return answer;
};

/** 테스트 케이스1 */
console.log('전위순회:', preorder(1)); // [1, 2, 4, 5, 3, 6, 7]
console.log('레퍼런스:', referencePreorder(1)); // '1 2 4 5 3 6 7 '
console.log('중위순회:', inorder(1)); // [4, 2, 5, 1, 6, 3, 7]
console.log('레퍼런스:', referenceInorder(1)); // '4 2 5 1 6 3 7 '
console.log('후위순회:', postorder(1)); // [4, 5, 2, 6, 7, 3, 1]
console.log('레퍼런스:', referencePostorder(1)); // '4 5 2 6 7 3 1 '
