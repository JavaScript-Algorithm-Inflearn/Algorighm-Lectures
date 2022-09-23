/*
[문제] 교육과정 설계 - 큐
- 현수는 1년 과정의 수업계획을 짜야 합니다.
- 수업중에는 필수과목이 있습니다.
- 이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있습니다.
- 만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면 필수과목은 C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 합니다.
- 여기서 순서란 B과목은 C과목을 이수한 후에 들어야 하고, A과목은 C와 B를 이수한 후에 들 어야 한다는 것입니다.
- 현수가 C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만
- C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 됩니다.
- 수업계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작하다는 것으로 해석합니다.
- 수업계획서상의 각 과목은 무조건 이수된다고 가정합니다.
- 필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력하는 프로그램을 작성하세요.

[입력]
- 첫 줄에 한 줄에 필수과목의 순서가 주어집니다.
- 모든 과목은 영문 대문자입니다.
- 두 번째 줄부터 현수가 짠 수업설계가 주어집니다.
- (수업설계의 길이는 30이하이다)

[출력]
- 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력합니다.

[입력예제 1]
- 'CBA', 'CBDAGE'

[출력예제 1]
- 'YES'
*/

/** 풀이1 - 시간복잡도 N */
const solution1 = (need, plan) => {
  const needQueue = need.split("");

  for (const x of plan) {
    if (x === needQueue[0]) needQueue.shift();
  }

  return needQueue.length === 0 ? "YES" : "NO";
};

/** 레퍼런스 - 시간복잡도 N */
const solution2 = (need, plan) => {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
};

/** 테스트 케이스1 */
let need = "CBA";
let plan = "CBDAGE";

console.log(1, solution1(need, plan)); // 'YES'
console.log(1, solution2(need, plan)); // 'YES'
