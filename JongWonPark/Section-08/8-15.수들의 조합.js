/*
[문제] 수들의 조합 - Recursion
- N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이
- 임의의 정수 M의 배수인 개수는 몇 개가 있는지 출력하는 프로그램을 작성하세요.
- 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고,
- 3개를 뽑은 조합의 합이 6의 배수인 조합을
- 찾으면 4+8+12 2+4+12로 2가지가 있습니다.

[입력]
- 첫 번째 줄에 정수의 개수 N(3<=N<=20)과 임의의 정수 K(2<=K<=N)가 주어지고,
- 두 번째 줄에는 N개의 정수가 주어진다.
- 세 번째 줄에 M이 주어집니다.

[출력]
- 총 가지수를 출력합니다.

[입력예제 1]
- 4, 2

[출력예제 1]
- [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

*/

/** 풀이1 */
const solution1 = (n, k, arr, m) => {
  let result = 0;

  // level: 현재 뽑은 숫자의 개수, start: 순회를 시작할 idx, sum 뽑은 수들의 합
  const aux = (level, start, sum) => {
    if (level === k) {
      if (sum % m === 0) result++;
    } else {
      // n - (k - level)까지 순회하는 이유
      // k - level: 더 뽑아야 하는 숫자의 개수
      // idx가 n - (k - level)보다 크면 남은 숫자를 모두 뽑아도 총 k개를 뽑을 수 가 없다.
      // ex. n = 5, k = 3, level = 0일 때 가능한 idx의 최댓값은 2이다.
      // ex. n = 5, k = 3, level = 1일 때 가능한 idx의 최댓값은 3이다.
      for (let idx = start; idx <= n - (k - level); idx++) {
        // arr[idx]를 뽑은 후, 다음 수를 뽑기 위해 재귀 함수 호출
        aux(level + 1, idx + 1, sum + arr[idx]);
      }
    }
  };

  aux(0, 0, 0);

  return result;
};

/** 레퍼런스 */
const reference = (n, k, arr, m) => {
  let answer = 0;
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
};

/** 테스트 케이스1 */
let n = 5;
let k = 3;
let arr = [2, 4, 5, 8, 12];
let m = 6;

console.log('1:', solution1(n, k, arr, m)); // 2
console.log('1:', reference(n, k, arr, m)); // 2
