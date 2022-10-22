/*
[문제] 수열 추측하기 - 이항계수,,? 파스칼의 삼각형..? ?_?
가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 
그리고 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 

예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.

3 1 2 4
 4 3 6
  7 9
  16

N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하시오. 

단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

▣ 입력설명
첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.

▣ 출력설명
첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재하지 않는 경우는 입력으로 주어지지 않는다.

▣ 입력예제 1 
4 16

▣ 출력예제 1
3 1 2 4
*/

/*
1 2 3 4 를 두 개 씩 더해나가면서 구한 최종 값은 (1*1) + (2*3) + (3*3) + (4*1) 이 된다.
궁금증.. 숫자가 5개가 되었을 땐 또 다르던데 어떤 규칙이 있는건가..? 잘 이해하기가 힘들다 ㅜㅜ.

1 2 3 4 라는 숫자가 있을 때 최종적으로 더하게 되는 각 수의 갯수는 첫 자리부터 3C0, 3C1, 3C2, 3C3 으로 구하게 된다.
만약 n 이 5이고 , 1 2 3 4 5 라는 수열로 F를 구하게 된다면,
4C0, 4C1, 4C2, 4C3, 4C4 이렇게 되어서... 1, 4, 6, 4, 1 이런 값을 구할 수 있게 되는 것이다.

[어려운 부분]
- 조합의 수를 구하는 것이 너무 헷갈린다... @_@??
- 어떻게 하면 두 숫자를 더해서 나온 값들이 컴비네이션 값이 되는것인자? 

*/

/*
1. n까지 길이를 가진 배열에 조합의 숫자로 구한 수를 자리에 맞춰서 저장
2. 1부터 n까지에 대한 순열을 구한 뒤에 위에서 구한 조합 숫자와 곱해서 더한 값을 F와 비교.
3. 비교 해서 값이 같다면 permutation을 리턴한다.

*/

const n = 4;
const f = 16;

// reference + 내 코드
function getPermutation(n, f) {
  let answer = [];
  let counts = new Array(n).fill(0);
  let tmp = new Array(n).fill(0);
  let visited = new Array(n + 1).fill(0);

  // let memo = new Array(11).fill(new Array(11).fill(0)); => 조합의 수가 올바르게 나오지 않는다. 무슨 차이지 ㅜㅜ
  let memo = Array.from(Array(11), () => Array(11).fill(0));
  // 조합의 수 구하는 함수
  function combi(n, r) {
    if (memo[n][r] > 0) return memo[n][r];
    if (r === 0 || n === r) return 1;
    else return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  // n-1C0, n-1C1 ... 로 반복되기 때문에 해당하는 조합수를 구한다.
  for (let i = 0; i < n; i++) {
    counts[i] = combi(n - 1, i);
  }

  function aux(L) {
    if (L === n) {
      const sum = tmp
        .map((el, i) => el * counts[i])
        .reduce((acc, cur) => acc + cur, 0);
      if (sum === f && answer.length === 0) answer = tmp.slice();
    } else {
      // 1부터 n까지의 수열이므로 아래와 같이 반복
      for (let i = 1; i <= n; i++) {
        // 현재 i번째는 방문하지 않은 상태라면
        if (!visited[i]) {
          // 방문한 상태로 변경하고
          visited[i] = 1;
          // tmp 배열에 현재 i르 ㄹ추가해주고
          tmp[L] = i;
          // 현재 i가 포함된 경우로 재귀를 돌린 다음에
          aux(L + 1);
          // 재귀에서 탈출하면 방문하지 않은 상태로 만들어준다.
          visited[i] = 0;
        }
      }
    }
  }
  aux(0);
  return answer;
}

const result = getPermutation(n, f);
console.log(result);

// reference
function solution(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({length: n + 1}, () => 0);
  let p = Array.from({length: n}, () => 0);
  let b = Array.from({length: n}, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
