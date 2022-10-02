/*
[문제]
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 선택정렬입니다.
*/

const nums = [13, 5, 11, 7, 23, 15];

function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        // swap
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }
    }
  }
  return nums;
}

const result1 = selectionSort(nums);
console.log(result1);

// reference code
function referenceSolution(nums) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    // let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  return answer;
}

const result2 = selectionSort(nums);
console.log(result2);
