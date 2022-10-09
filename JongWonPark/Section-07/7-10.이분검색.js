/*
[문제] 이분검색 - 이진 탐색
- 임의의 N개의 숫자가 입력으로 주어집니다.
- N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면
- 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
- 단 중복값은 존재하지 않습니다.

[입력]
- 첫 번째 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다.
- 두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.

[출력]
- 첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

[입력예제 1]
- 32, [ 23, 87, 65, 12, 57, 32, 99, 81 ]

[출력예제 1]
- 3

/** 풀이1 - 시간복잡도 N * log(N) */
const solution1 = (target, arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let left = 0;
  let right = sortedArr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (sortedArr[middle] !== target) {
    middle = Math.floor((left + right) / 2);

    if (sortedArr[middle] < target) left = middle + 1;
    if (sortedArr[middle] > target) right = middle - 1;
  }

  return middle + 1;
};

/** 풀이2 - 시간복잡도 N * log(N) */
const solution2 = (target, arr) => {
  let result;
  const sortedArr = [...arr].sort((a, b) => a - b);
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (sortedArr[middle] === target) {
      result = middle + 1;
      break;
    }
    if (sortedArr[middle] < target) left = middle + 1;
    if (sortedArr[middle] > target) right = middle - 1;
  }

  return result;
};

/** 레퍼런스 - 시간복잡도 N * log(N) */
const reference = (target, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
};

/** 테스트 케이스1 */
let target = 32;
let arr = [23, 87, 65, 12, 57, 32, 99, 81];

console.log(1, solution1(target, arr)); // 3
console.log(1, solution2(target, arr)); // 3
console.log(1, reference(target, arr)); // 3
