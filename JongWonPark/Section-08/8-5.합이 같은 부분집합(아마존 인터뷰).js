/*
[문제] 합이 같은 부분집합(아마존 인터뷰) - DFS
- N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때
- 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고,
- 그렇지 않으면 "NO"를 출력하는 프로그램을 작성하세요.
- 둘로 나뉘는 두 부분집합은 서로소 집합이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.
- 예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로
- 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.

[입력]
- 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
- 두 번째 줄에 집합의 원소 N개가 주어진다.
- 각 원소는 중복되지 않으며, 그 크기는 1,000,000 이하입니다.

[출력]
- 첫 번째 줄에 “YES" 또는 ”NO"를 출력한다.

[입력예제 1]
- [1, 3, 5, 6, 7, 10]

[출력예제 1]
- 'YES'
*/

// 서로소 집합: 공통 원소가 없는 두 집합

/** 풀이1 */
const solution1 = (arr) => {
  let answer = 'NO';
  const sum = arr.reduce((prev, curr) => prev + curr) / 2;
  const check = new Array(arr.length).fill(false);

  const aux = (vertex) => {
    if (vertex === arr.length) {
      if (arr.filter((e, i) => check[i]).reduce((a, b) => a + b, 0) === sum) {
        answer = 'YES';
        return;
      }
    } else {
      check[vertex] = true;
      aux(vertex + 1);
      check[vertex] = false;
      aux(vertex + 1);
    }
  };

  aux(0);

  return answer;
};

/** 풀이2 */
const solution2 = (arr) => {
  let answer = 'NO';
  const total = arr.reduce((prev, curr) => prev + curr) / 2;
  let flag = false;

  const aux = (level, sum) => {
    if (flag) return;

    if (level === arr.length) {
      if (sum === total) {
        answer = 'YES';
        flag = true;
        return;
      }
    } else {
      aux(level + 1, sum + arr[level]);
      aux(level + 1, sum);
    }
  };

  aux(0, 0);

  return answer;
};

/** 레퍼런스 */
const reference = (arr) => {
  let answer = 'NO',
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
};

/** 테스트 케이스1 */
let arr = [1, 3, 5, 6, 7, 10];

console.log('1:', solution1(arr)); // 'YES'
console.log('1:', solution2(arr)); // 'YES'
console.log('1:', reference(arr)); // 'YES'
