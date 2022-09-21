/*
[문제] 학급 회장 - Hash Map
- 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
- 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
- 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작 성하세요. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

[입력]
- 첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
- 두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.

[출력]
- 학급 회장으로 선택된 기호를 출력합니다.

[입력예제 1]
- 15, 'BACBACCACCBDEDE'

[출력예제 1]
- C
*/

/** 풀이1 - object 이용. 시간복잡도 N */
const nativeSolution = (s) => {
  const counts = {};

  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === undefined) counts[s[i]] = 1;
    else counts[s[i]] += 1;
  }

  return Object.keys(counts).reduce((prev, curr) =>
    counts[prev] < counts[curr] ? curr : prev
  );
};

/** 풀이1 - Map 객체 이용. 시간복잡도 N */
const solution = (s) => {
  let result;
  const counts = new Map();

  for (let i = 0; i < s.length; i++) {
    if (counts.has(s[i])) counts.set(s[i], counts.get(s[i]) + 1);
    else counts.set(s[i], 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (const [key, value] of counts) {
    if (max < value) {
      max = value;
      result = key;
    }
  }

  return result;
};

/** 테스트 케이스1 */
const s = "BACBACCACCBDEDE";

console.log(nativeSolution(s)); // 'C'
console.log(solution(s)); // 'C'
