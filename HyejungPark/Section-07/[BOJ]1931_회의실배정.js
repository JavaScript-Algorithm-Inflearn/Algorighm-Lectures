// 로컬 테스트
const inputPath = '/input.txt';

// 백준 제출용
// const inputPath = '/dev/stdin';

let fs = require('fs');
let input = fs
  .readFileSync(__dirname + inputPath)
  .toString()
  .split(/\n/)
  .map(el =>
    el
      .replace(/\r/, '')
      .split(' ')
      .map(v => +v),
  );

input.shift();

function getMaxMeetings(timeTable) {
  let answer = 0;
  const sortedArr = timeTable.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let meeting of sortedArr) {
    if (meeting[0] >= et) {
      answer++;
      et = meeting[1];
    }
  }
  return answer;
}

const result1 = getMaxMeetings(input);
console.log(result1);
