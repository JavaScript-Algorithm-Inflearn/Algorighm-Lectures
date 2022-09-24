/*
[문제]

현수는 1년 과정의 수업계획을 짜야 합니다.
수업중에는 필수과목이 있습니다. 이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있습니다.

만약 총 과목이 A, B, C, D, E, F, G가 있고, 
여기서 필수과목이 CBA로 주어지면 필수과목은 C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 합니다.
여기서 순서란 B과목은 C과목을 이수한 후에 들어야 하고, A과목은 C와 B를 이수한 후에 들어야 한다는 것입니다.

현수가 C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만
C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 됩니다.

수업계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작하다는 것으로 해석합니다.
수업계획서상의 각 과목은 무조건 이수된다고 가정합니다.
 
필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면
”NO“를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 한 줄에 필수과목의 순서가 주어집니다. 모든 과목은 영문 대문자입니다.
두 번 째 줄부터 현수가 짠 수업설계가 주어집니다.(수업설계의 길이는 30이하이다)

▣ 출력설명
수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력합니다.

▣ 입력예제 1
CBA
CBDAGE

▣ 출력예제 1
YES
*/

const required = 'CBA';
const classes = 'CABDGE';

// 시도 1 (queue 자료구조 사용 X)
// 수업 계획에서 required 와 일치하는 요소만 필터링
// for문으로 순서에 맞는지 확인 후 결과 리턴
function solution1(required, classes) {
  const requiredClass = required.split('');
  const reduced = classes.split('').filter(el => requiredClass.includes(el));

  for (let i = 0; i < required.length; i++) {
    if (requiredClass[i] !== reduced[i]) return false;
  }
  return true;
}

const result1 = solution1(required, classes);
console.log(result1);

/*
[메모]

만약 큐를 사용한다면..?
- requiered 를 queue로 만들고, classes를 반복문으로 돌면서 required 의 0번째 요소와 같은지 확인.
- 0번째 요소와 같다면 required를 shift.
- 순서가 일치해야만 queue가 완전히 비워질 수 있음.
- 따라서 반복문을 다 돌고 queue의 길이가 0일 경우 true, 아닐 경우 false 가 될 수 있다.

*/

// 시도 2
// 메모에 적은 풀이 방법 적용.
function solution2(required, classes) {
  let queue = required.split('');
  for (let el of classes) {
    if (queue[0] === el) queue.shift();
  }

  return queue.length === 0 ? true : false;
}

const result2 = solution2(required, classes);
console.log(result2);

// 레퍼런스 코드
// early return이 되기 때문에 반복문을 도는 횟수가 적어질 수 있어서
// 조금 더 효율적인 것 같다.
function solution3(required, classes) {
  let answer = 'YES';
  let queue = required.split('');
  // 현수의 계획을 x로 반복한다.
  for (let x of classes) {
    // 만약 queue에 현재 x가 있을 경우
    if (queue.includes(x)) {
      // 그래서 그 x의 순서가 맞는지 비교해보려고 queue.shift를 했는데 틀리면 바로 리턴.
      if (x !== queue.shift()) return 'NO';
    }
  }

  // 다 돌고 확인했는데 queue가 안비워져 있으면 또 리턴
  if (queue.length > 0) return 'NO';

  // 위의 두 조건을 모두 다 통과하면 YES.
  return answer;
}

const result3 = solution3(required, classes);
console.log(result3);
