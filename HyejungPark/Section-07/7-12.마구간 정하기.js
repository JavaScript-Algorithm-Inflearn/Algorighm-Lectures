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

function count(positions, distance) {
  // 말은 최소 하나 이상 들어갈 것이기 때문에 cnt 는 최소 1이다.
  let cnt = 1;
  // 서로 멀리 떨어뜨려 놓아야 하기 때문에, 가장 첫 번째 마굿간에 말을 둔다는 의미로
  // 해당 위치를 기억한다.
  let lastposition = positions[0];
  for (let i = 1; i < positions.length; i++) {
    // 현재 위치로 부터 마지막에 위치한 말의 거리가 주어진 distance 값(mid : 최대 거리 중 최소 거리)
    // 보다 크거나 같다면, 그 위치에 말이 있어야 하므로 lastposition을 업데이트한다.
    if (positions[i] - lastposition >= distance) {
      cnt++;
      lastposition = positions[i];
    }
  }
  return cnt;
}

function solution2(c, positions) {
  // 전체 좌표 정렬
  positions.sort((a, b) => a - b);
  let answer = 0;
  // 가장 최소 거리부터 최대 거리가 될 가능성이 있는 positions의 마지막 요소까지를
  // 떨어져있는 거리의 범위로 한다.
  // 가장 가까이 떨어져있는 거리 중 최대를 구해야 하므로 말이 각 거리이상 떨어져있다고 가정한다.
  let start = 1;
  let end = positions[positions.length - 1];
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    // 떨어져있을 거리와 말이 주어졌을 때 말이 들어간 카운트가 c보다 크거나 같다면
    // 최적의 답은 아니어도 정답 후보가 되므로 answer에 mid 값을 저장한다.
    if (count(positions, mid) >= c) {
      answer = mid;
      // 탐색 범위가 더 커야 말들이 멀리 떨어진 최적의 거리를 구할 수 있으므로
      // start 포인트를 옮겨준다.
      start = mid + 1;
    } else {
      // 거리가 너무 멀어지면 말이 c 마리만큼 다 들어가지 못하기 때문에
      // end를 옮겨 더 작은 거리를 탐색하도록 범위를 좁힌다.
      end = mid - 1;
    }
  }
  return answer;
}

const result2 = solution2(C, arr);
console.log(result2);
