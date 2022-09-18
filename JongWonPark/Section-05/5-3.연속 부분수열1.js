/*
[문제] 연속 부분수열1 - Two Pointers Algorithm
- N개의 수로 이루어진 수열이 주어집니다.
- 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
- 만약 N=8, M=6이고 수열이 다음과 같다면
- 1 2 1 3 1 1 1 2
- 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다

[입력]
- 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
- 수열의 원소값은 1,000을 넘지 않는 자연수이다.

[출력]
- 첫째 줄에 경우의 수를 출력한다.

[입력예제 1]
- 6, [1, 2, 1, 3, 1, 1, 1, 2]

[출력예제 1]
- 3
*/

/** 풀이1 - 이중 for문 이용. 시간복잡도 N^2 */
const nativeSolution = (m, arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];

      if (sum === m) result += 1;
      if (sum > m) break;
    }
  }

  return result;
};

/** 풀이2 - 투 포인터 알고리즘 이용. 시간복잡도 N */
const solution = (m, arr) => {
  let result = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    if (sum === m) result += 1;

    while (sum >= m) {
      sum -= arr[left];
      left += 1;

      if (sum === m) result += 1;
    }
  }

  return result;
};

/** 테스트 케이스1 */
const m = 6;
const arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(nativeSolution(m, arr)); // 3
console.log(solution(m, arr)); // 3
