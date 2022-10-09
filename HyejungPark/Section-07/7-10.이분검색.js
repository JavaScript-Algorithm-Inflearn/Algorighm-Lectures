/*
[문제]
임의의 N개의 숫자가 입력으로 주어집니다. N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요. 

단 중복값은 존재하지 않습니다.
*/

// 시간복잡도 O(logN)

const M = 32;
const numbers = [23, 87, 65, 12, 57, 32, 99, 81];

function binarySearch(M, arr) {
  const sortedArr = numbers.sort((a, b) => a - b);
  const N = sortedArr.length;
  let flag = false;
  let index = -1;

  // 시작점
  let start = 0;
  // 끝점
  let end = N - 1;
  // start 가 high보다 작거나 같을 때까지 => start와 end 사이에 search할 요소들이 남아있는 경우
  while (start <= end) {
    // start와 end 의 중간값
    let mid = parseInt((start + end) / 2);

    if (sortedArr[mid] === M) {
      flag = true;
      index = mid + 1;
      break;
    }
    // 중간값이 찾는 값보다 클 때 : 더 큰 쪽(mid 기준 우측)은 탐색할 필요가 없으므로 검색대상에서 제외한다.
    else if (sortedArr[mid] > M) {
      // start 부터 mid 바로 직전까지, 현재 mid 보다 더 작은 범위에서 검색.
      end = mid - 1;
    }
    // 반대의 경우 더 큰 쪽을 탐색해야한다.
    else {
      start = mid + 1;
    }
  }

  if (flag) {
    return index;
  } else {
    return -1;
  }
}

const result = binarySearch(M, numbers);
console.log(result);

// 재귀적 풀이
function recursiveBinarySearch(target, arr) {
  // start, mid, end 포인트를 각각 초기화한다.
  let start = 0;
  let end = arr.length - 1;
  let mid = parseInt((start + end) / 2);

  // 재귀함수
  const recursive = (s, m, e) => {
    // 재귀함수 반복시 m을 초기화한다.
    m = parseInt((s + e) / 2);

    // target값과 현재 중간값이 같다면 정답이므로 리턴
    if (target === arr[m]) return m + 1;
    // start point 가 end point 보다 커질 경우, 범위를 초과하므로 찾는 값이 없다.
    if (s > e) return -1;

    // 다음 재귀에서의 탐색 범위 설정 로직
    if (target > arr[m]) return recursive(m + 1, m, e);
    else if (target < arr[m]) return recursive(s, m, m - 1);
  };

  return recursive(start, mid, end);
}

const result2 = recursiveBinarySearch(M, numbers);
console.log(result2);
