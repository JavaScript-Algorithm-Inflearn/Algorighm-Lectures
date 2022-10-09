/*
[문제]
N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 
마구간 간에 좌표가 중복되는 일은 없습니다.
현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
각 마구간에는 한 마리의 말만 넣을 수 있고, 
가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
C마리의 말을 N개의 마구간에 배치했을 때 
가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하는 프로그램을 작성하세요.


▣ 입력설명
첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

▣ 출력설명
첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

▣ 입력예제 1
5 3
1 2 8 4 9

1 2 4 8 9

▣ 출력예제 1
3
*/

/*
[풀이]
1. 전체 마굿간을 오름차순으로 정렬해야할 것 같다. 
2. 구하고자 하는 값이 어떤 범위 내에 있는지를 찾아야함. => 이분검색 
3. start는 1, end는 가장 끝 9로 한다. 
=> start에 들어가는 값이 가장 작은 마굿간 좌표가 아닌가??
4. 가장 가까운 말의 거리가 mid 값일 때 모든 말이 다 들어갈 수 있는지를 카운트 

5. count 함수) 첫번째 좌표를 ep 변수에 넣고, 그 다음 포인트와 ep를 비교. 
이전 ep 와 현재 좌표를 비교해서 mid 보다 크거나 같은지를 확인(현재 mid 값은 말 간의 최소 거리라고 가정함.)

Q. 어떻게 가장 작은 좌표 + 큰 좌표 / 2 가 말들 사이의 최소 거리가 되는거지...???
문제를 잘 이해하지 못하고 있는 것 같다...

*/
const arr = [1, 2, 8, 4, 9];
const C = 3;

function count(stable, dist) {
  let cnt = 1;
  let lastPosition = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - lastPosition >= dist) {
      cnt++;
      lastPosition = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let start = 1;
  let end = stable[stable.length - 1];
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

const result = solution(C, arr);
console.log(result);
