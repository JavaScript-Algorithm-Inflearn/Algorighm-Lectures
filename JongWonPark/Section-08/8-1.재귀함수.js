/*
[문제] 재귀함수 - 재귀
- 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

[입력]
- 첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.

[출력]
- 첫째 줄에 출력한다.

[입력예제 1]
- 3

[출력예제 1]
- 1 2 3
*/

/** 풀이1 */
const solution1 = (n) => {
  let cur = 1;

  const aux = () => {
    console.log(cur);

    if (cur === n) return;

    cur++;
    return aux();
  };

  return aux();
};

/** 레퍼런스 */
const reference = (n) => {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
};

/** 테스트 케이스1 */
let n = 3;

console.log('solution1');
solution1(n); // 1 2 3
console.log('reference');
reference(n); // 1 2 3
