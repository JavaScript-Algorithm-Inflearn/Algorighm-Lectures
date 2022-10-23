/*
[문제] 조합 구하기 - Recursion, Memoization
- 1부터 N까지 번호가 적힌 구슬이 있습니다.
- 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.

[입력]
- 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.

[출력]
- 첫 번째 줄에 결과를 출력합니다.
- 출력순서는 사전순으로 오름차순으로 출력합니다.

[입력예제 1]
- 4, 2

[출력예제 1]
- [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

*/

/** 풀이1 */
const solution1 = (n, m) => {
  const result = [];

  const aux = (arr) => {
    if (arr.length === m) {
      result.push(arr);
    } else {
      for (let i = 1; i <= n; i++) {
        if (arr.length === 0 || arr[arr.length - 1] < i) aux([...arr, i]);
      }
    }
  };

  aux([]);

  return result;
};

/** 풀이2 */
const solution2 = (n, m) => {
  const result = [];

  const aux = (arr) => {
    if (arr.length === m) {
      result.push(arr);
    } else {
      if (arr.length === 0) {
        for (let i = 1; i <= n - m + 1; i++) {
          aux([i]);
        }
      } else {
        for (
          let i = arr[arr.length - 1] + 1;
          i <= n - m + arr.length + 1;
          i++
        ) {
          aux([...arr, i]);
        }
      }
    }
  };

  aux([]);

  return result;
};

/** 풀이3 */
const solution3 = (n, m) => {
  const result = [];
  const temp = [];

  const aux = (level, start) => {
    if (level === m) {
      result.push([...temp]);
    } else {
      for (let i = start; i <= n - (m - level) + 1; i++) {
        temp.push(i);
        aux(level + 1, i + 1);
        temp.pop();
      }
    }
  };

  aux(0, 1);

  return result;
};

/** 레퍼런스 */
const reference = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
};

/** 테스트 케이스1 */
let n = 4;
let m = 2;

// [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
console.log('1:', solution1(n, m));
console.log('1:', solution2(n, m));
console.log('1:', solution3(n, m));
console.log('1:', reference(n, m));
