/*
[문제] 최대 매출 - 슬라이딩 윈도우 알고리즘

현수의 아빠는 제과점을 운영합니다. 
현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.

만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면, 
12 15 11 20 25 10 20 19 13 15

연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
여러분이 현수를 도와주세요.

▣ 입력설명
첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.

▣ 출력설명
첫 줄에 최대 매출액을 출력합니다.

▣ 입력예제 1
10 3
12 15 11 20 25 10 20 19 13 15

▣ 출력예제 1
56

*/

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const k = 3;

// 1번째 시도한 코드
// : lt와 rt를 선언해서, rt를 증가하면서 더하고,
// rt - lt 가 k - 1 보다 클 경우(index가 0부터 시작하므로 -1을 해줌)
// sum 에서 lt를 빼면서 증가
// sum에 rt를 더하고 max 값과 비교하여 max를 갱신하여 리턴

function solution1(arr, k) {
  let max = Number.MIN_SAFE_INTEGER;
  let lt = 0;
  let sum = 0;
  let N = arr.length;

  for (let rt = 0; rt < N; rt++) {
    sum += arr[rt];
    while (rt - lt > k - 1) {
      sum -= arr[lt++];
    }
    if (max < sum) max = sum;
  }

  return max;
}

const result1 = solution1(arr, k);
// console.log(result1);

// 2번째 시도한 코드
// : i - k 를 해서 i 가 증가하는 만큼 이전에 더했던 값을 빼서 윈도우를 유지하는 방법.
// 처음부터 arr[i - k]를 하면 NaN이 되기 때문에, arr[i - k]가 존재하는지 확인한 후 빼주는 방법을 선택함.
function solution2(arr, k) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    sum += arr[i];
    if (arr[i - k]) {
      sum -= arr[i - k];
    }

    if (max < sum) max = sum;
  }

  return max;
}

const result2 = solution2(arr, k);
// console.log(result2);

// 풀이 : 강사님의 풀이 코드
// for문을 각각 두번 돌려서, 0부터 k 까지의 윈도우를 미리 만든 상태에서 다음 for문을 돌려 더하고 빼면서 답을 찾아간다.
function solution3(arr, k) {
  let max = 0;
  let sum = 0;

  // 0 부터 k 만큼 갯수를 가진 윈도우를 만들고, 그 합계를 max 에 일단 업데이트 한다.
  for (let i = 0; i < k; i++) sum += arr[i];
  max = sum;

  // k 부터 배열의 종료지점까지 i를 반복하면서, sum을 업데이트 한다. i가 증가하면 sum에 i 값을 더하는 동시에 윈도우 범위를 벗어나는 i - k 값을 빼는 것.
  // 그와 동시에 max 를 업데이트 하여 답을 도출한다.
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }

  return max;
}

const result3 = solution3(arr, k);
console.log(result3);
/*
[풀이 과정]

- 슬라이딩 윈도우 알고리즘이란 고정된 범위 (윈도우)를 가지고 움직이는 것으로, 
정렬이 되어 있는 투포인터와 달리 정렬되지 않은 배열에서 사용될 수 있음.

*/
