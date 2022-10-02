/*
[문제] 회의실 배정 - Greedy

한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들려고 한다. 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라. 

단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

1. 시작 시간이 제일 이르면서 끝나는 시간과의 차이가 제일 적은 회의
2. 다음 회의를 시작하려면 앞 회의의 끝나는 시간과 같거나 더 커야한다.

=> 끝나는 시간을 기준으로 정렬해야한다.

*/

const meetings = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

// const meetings = [
//   [3, 3],
//   [1, 3],
//   [2, 3],
// ];

function getMaxMeetings(timeTable) {
  let answer = 0;
  // 정렬시 끝나는 시간을 기준으로 정렬
  // 끝나는 시간이 같을 경우 시작하는 시간을 기준으로 정렬
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

const result1 = getMaxMeetings(meetings);
console.log(result1);
