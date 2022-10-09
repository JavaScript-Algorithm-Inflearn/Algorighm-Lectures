/*
[문제] 뮤직비디오 - 이진 탐색
- 지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다.
- DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다.
- 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다.
- 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다.
- 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
- 지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다.
- 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다.
- 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다.
- 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.

[입력]
- 첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다.
- 다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다.
- 부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.

[출력]
- 첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.

[입력예제 1]
- 3, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

[출력예제 1]
- 17

/** 풀이1 - 시간복잡도 N * log(N) */
const solution1 = (m, songs) => {
  // DVD의 최소 용량 (DVD 개수 고려 X)
  let left = Math.max(...songs);
  // DVD의 최대 용량 (DVD 개수 고려 X)
  let right = songs.reduce((prev, curr) => prev + curr);

  let result = Number.MAX_SAFE_INTEGER;

  // DVD의 최소 용량과 최대 용량 사이의 값을 이진 탐색을 통해 찾는다.
  // DVD의 용량이 middle일 때, 최소 개수를 구한다.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    let sum = 0;
    // 마지막 DVD를 포함하기 위해 1로 초기화
    let count = 1;

    for (const x of songs) {
      // 노래를 추가할 수 있을 때
      if (sum + x <= middle) sum += x;
      // 노래를 추가할 수 없을 때
      else {
        count++;
        sum = x;
      }
    }

    if (count <= m) {
      result = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return result;
};

/** 레퍼런스 - 시간복잡도 N * log(N) */
const reference = (m, songs) => {
  function count(songs, capacity) {
    let cnt = 1,
      sum = 0;
    for (let x of songs) {
      if (sum + x > capacity) {
        cnt++;
        sum = x;
      } else sum += x;
    }
    return cnt;
  }

  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
};

/** 테스트 케이스1 */
let m = 3;
let songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(1, solution1(m, songs)); // 17
console.log(1, reference(m, songs)); // 17
