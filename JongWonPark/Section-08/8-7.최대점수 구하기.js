/*
[문제] 최대점수 구하기 - DFS
- 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
- 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
- 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
- (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

[입력]
- 첫 번째 인자: 제한 시간 M(10<=M<=300)
- 두 번째 인자: 각 문제를 푸는 데 걸리는 시간이 요소인 배열
- 세 번째 인자: 각 문제의 점수가 요소인 배열
- 단, 문제의 개수 N은 1<=N<=20이다.

[출력]
- 첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.

[입력예제 1]
- 20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]

[출력예제 1]
- 41
*/

/** 풀이1 */
const solution1 = (m, problemScores, problemTimes) => {
  let result = 0;

  const aux = (level, sum, time) => {
    if (level === problemScores.length) {
      result = Math.max(result, sum);
    } else {
      if (time + problemTimes[level] <= m)
        aux(level + 1, sum + problemScores[level], time + problemTimes[level]);
      aux(level + 1, sum, time);
    }
  };

  aux(0, 0, 0);

  return result;
};

/** 레퍼런스 */
const reference = (m, problemScores, problemTimes) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = problemScores.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + problemScores[L], time + problemTimes[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
};

/** 테스트 케이스1 */
let m = 20;
let problemScores = [10, 25, 15, 6, 7];
let problemTimes = [5, 12, 8, 3, 4];

console.log('1:', solution1(m, problemScores, problemTimes)); // 41
console.log('1:', reference(m, problemScores, problemTimes)); // 41
