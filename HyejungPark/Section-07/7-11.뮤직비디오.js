/*
[문제]
지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다. DVD 에는 총 N 개의 곡이 들어있는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다. 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다.

즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다. 또 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.

지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다. 고민 끝에 지니레코드는 M개의 DVD 에 모든 동영상을 녹화하기로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야한다.

▣ 입력설명
첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다. 다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다. 부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.

▣ 출력설명
첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.

▣ 입력예제 1
9 3
1 2 3 4 5 6 7 8 9

▣ 출력예제 1
17

N개의 곡을 M개의 DVD에 나눠 담을 때, DVD의 최소 크기가 얼만큼 되어야 나눠진 곡들을 모두 녹화할 수 있는지? 

*/

const M = 3;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 전체 배열을 순회하며 합이 m이 될 때 까지 total을 초기화 하며 돌렸을 때 카운트가 M 이하이면 answer로 할당
// 값 초기화 후 다시 recursive 호출
// 전체 배열 순회, 합이 m이 될 때 까지 돌린 카운트가 M이면 answer 가 M이 되고 재귀 탈출
// lt가 rt보다 커질 때 까지 돌린다...!

// count 구하는 함수
const getCount = (target, arr) => {
  let sum = 0;
  // count => 사용한 DVD의 갯수
  let count = 1;
  for (let x of arr) {
    // sum 에 현재 값을 더한 값이 target을 넘어갈 경우
    // 카운트를 증가시키고 현재 sum 을 x로 초기화한다.
    // 다음 반복부터 sum 에 x가 더해진다.
    // arr가 정렬되지 않은 경우도 있기 때문에 sum + x가 target을 넘는지 확인하는 것 같다.
    if (sum + x > target) {
      count++;
      sum = x;
    }
    // sum + x 가 target 보다 작거나 같은 경우 sum에 x를 추가한다.
    else sum += x;
  }
  return count;
};

function record(M, arr) {
  // start, end 의 범위를 초기화
  let start = Math.max(...arr);
  let end = arr.reduce((acc, cur) => acc + cur, 0);
  let answer = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    // mid 값이 M보다 작거나 같다면 정답으로 간주함(M 개 이내로 저장할 수 있기 때문에. )
    if (getCount(mid, arr) <= M) {
      answer = mid;
      // start ~ end 까지의 범위를 줄여서 다시 반복문을 돌렸을 때
      // 전체 탐색을 마치고나면 while문이 종료되면서
      // 최소 조건에 해당되었던 answer 값이 갱신되지 않으므로 정답이 된다.
      end = mid - 1;
    } else start = mid + 1;
  }
  return answer;
}

const result = record(M, arr);
console.log(result);
