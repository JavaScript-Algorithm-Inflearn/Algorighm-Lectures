/*
[문제] 조합 구하기

1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.

▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.

▣ 입력예제 1 
4 2

▣ 출력예제 1
1 2
1 3
1 4
2 3
2 4
3 4
6
*/

const n = 4;
const m = 2;

// 왜 안되지?
function combinations(n, m) {
  let tmp = new Array(m).fill(0);
  let answer = [];

  function aux(L, start) {
    if (L === m) answer.push(tmp.slice());
    else {
      for (let i = start; i <= n; i++) {
        tmp[L] = i;
        aux(L + 1, i + 1);
      }
    }
  }
  aux(0, 1);
  return answer;
}

const result = combinations(n, m);
console.log(result);

///////////////////////////////////////////////////////
function solution(n, m) {
  let answer = [];
  let tmp = new Array(m).fill(0);

  // s는 다음 재귀에서 for문의 시작점이 될 숫자이다.
  function DFS(L, s) {
    // L을 증가하다가 m이 되면 완성된 조합을 answer 배열에 추가한다.
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      // i를 직전 함수 호출로 부터 받아온 s(직전 i의 +1)값부터 시작한다.
      for (let i = s; i <= n; i++) {
        // 현재 위치에 해당 i를 포함하고
        tmp[L] = i;
        // L을 증가시키면서 다음 for문의 start 위치를 옮겨서 현재보다 한 숫자 앞에서 반복이 시작되도록 한다.
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

// console.log(solution(4, 2));
