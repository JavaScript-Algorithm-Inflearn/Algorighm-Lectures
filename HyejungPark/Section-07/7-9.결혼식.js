/*
[문제] 결혼식 

현수는 다음 달에 결혼을 합니다.
현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.

만약 한 친구가 오는 시간 13, 가는시간 15라면 
이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.

▣ 입력설명
첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)이 주어집니다.
두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어집니다.
시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가는 시간이 음이 아닌 정수로 표현됩니다.

▣ 출력설명
첫째 줄에 피로연장에 동시에 존재하는 최대 인원을 출력하세요.

1. 3일 => 0 ~ 72 까지 있을 때, 각 타임이 1 단위로 증가.
2. times 가 있을 때 겹치는게 가장 많으면 그 겹친 수를 리턴해야함.

// 시도한 풀이 
배열을 times 의 max값 -1 까지 만들고
각 배열을 반복하면서 0번째 ~ 1번째 숫자 -1까지 인덱스에 숫자를 하나씩 카운팅
최종적으로  max 가 되는 값을 찾는다. 
*/

const N = 5;
const times = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

function maxHeadCount1(times) {
  const sortedArr = times.sort((a, b) => b[1] - a[1]);
  const max = sortedArr[0][1];
  const days = new Array(max).fill(0);

  sortedArr.forEach(time => {
    for (let i = time[0]; i < time[1]; i++) {
      days[i]++;
    }
  });
  return Math.max(...days);
}

// const result1 = maxHeadCount1(times);
// console.log(result1);

// reference
// 각각의 배열 요소를 쪼개서 온 시간, 간 시간으로 쪼개서 정렬한다.
// start 이벤트를 만나면 카운팅을 추가
// end 이벤트를 만나면 카운팅을 감소
// 한 사람이 왔다가 가려면 두 이벤트가 합이 같아야 함.
// start는 있는데 end 가 없다는 것은 아직 거기에 있다는 의미...!

function maxHeadCount2(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let count = 0;
  let timelines = [];
  times.forEach(time => {
    timelines.push([time[0], 's']);
    timelines.push([time[1], 'e']);
  });

  // 시간 순서대로 정렬하되, e와 s가 같은 값인 경우, e가 먼저 오도록 정렬
  timelines.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  timelines.forEach(time => {
    if (time[1] === 's') count++;
    else count--;
    if (count > answer) answer = count;
  });

  return answer;
}

const result2 = maxHeadCount2(times);
console.log(result2);
