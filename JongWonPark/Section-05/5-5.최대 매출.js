/*
[문제] 최대 매출 - Sliding Window
- 현수의 아빠는 제과점을 운영합니다.
- 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
- 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
- 12 15 11 20 25 10 20 19 13 15
- 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.

[입력]
- 첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
- 두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.

[출력]
- 첫 줄에 최대 매출액을 출력합니다.

[입력예제 1]
- 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]

[출력예제 1]
- 56
*/

/** 풀이1 - 이중 for문 이용. 시간복잡도 N^2 */
const nativeSolution = (k, arr) => {
  let result = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }

    if (result < sum) result = sum;
  }

  return result;
};

/** 풀이2 - 슬라이딩 윈도우 이용. 시간복잡도 N */
const solution = (k, arr) => {
  let result = 0;

  for (let i = 0; i < k; i++) {
    result += arr[i];
  }

  let sum = result;

  for (let right = k; right < arr.length; right++) {
    sum += arr[right] - arr[right - k];

    if (result < sum) result = sum;
  }

  return result;
};

/** 테스트 케이스1 */
const k = 3;
const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(nativeSolution(k, arr)); // 56
console.log(solution(k, arr)); // 56
