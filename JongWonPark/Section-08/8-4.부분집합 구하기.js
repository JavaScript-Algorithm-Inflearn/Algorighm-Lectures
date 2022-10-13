/*
[문제] 부분집합 구하기 - DFS
- 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.

[입력]
- 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

[출력]
- 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래의 출력예제와 같은 순서로 출력한다.
- 단, 공집합은 출력하지 않습니다.

[입력예제 1]
- 3

[출력예제 1]
- [
    [1, 2, 3],
    [1, 2],
    [1, 3],
    [1],
    [2, 3],
    [2],
    [3],
  ]
*/

/** 풀이1 - DFS 사용 X */
const solution1 = (n) => {
  const result = [];

  for (let i = 2 ** n - 1; i > 0; i--) {
    const subset = [];

    let binary = i.toString(2);
    while (binary.length < n) binary = '0' + binary;

    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === '1') subset.push(Number(j) + 1);
    }

    result.push(subset);
  }

  return result;
};

/** 풀이2 - DFS 사용 O */
const solution2 = (n) => {
  const result = [];

  const aux = (vertex, arr) => {
    if (vertex === n + 1) {
      result.push(arr);
      return;
    }

    // O
    aux(vertex + 1, arr.concat(vertex));
    // X
    aux(vertex + 1, arr);
  };

  aux(1, []);

  result.pop();

  return result;
};

/** 레퍼런스 */
const reference = (n) => {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L) {
    if (L === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
};

/** 테스트 케이스1 */
let n = 3;

// [ [1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3] ]
console.log('1:', solution1(n));
console.log('1:', solution2(n));
console.log('1:', reference(n));
