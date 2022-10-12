/*
[문제] 이진트리 순회 DFS
아래 그림과 같은 이진트리에서 전위순회, 후휘순회를 연습해보세요. 

예시) 
* 이렇게 만들어진 트리가 주어지진 않음.
{
    node: 1,
    child: 
    {
        node : 2, 
        child : {node:4}, {node:5}
    },
    {
        node : 3,
        child : {node:6}, {node:7}
    }
}

* 전위순회 : 1 2 4 5 3 6 7
* 중위순회 : 4 2 5 1 6 3 7
* 후위순회 : 4 5 2 6 7 3 1

*/

/*
//레퍼런스 코드
1. 1부터 7 까지 순차적으로 포함하는 이진 트리를 만들 것이므로, 1부터 시작하여 종료 조건은 7을 넘어가는 시점이 된다.
2. 종료조건이 아니라면 짝수, 홀수 두 가지 경우로 가지가 나뉜다.
3. 각 경우에 대해 n*2 혹은 n*2+1 로 재귀호출을 하고, answer에 누적하는 시점에 따라 순회의 순서가 달라지게 된다.
*/
function reference(N) {
  let answer = '';
  function DFS(n) {
    if (n > 7) return;
    else {
      // answer 에 n을 누적하는 위치에 따라서 순서가 달라진다.
      answer += n;
      DFS(n * 2);
      DFS(n * 2 + 1);
    }
  }

  DFS(N);
  return answer;
}

const result = reference(1);
console.log(result);
