/*
[문제]
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 버블정렬입니다.
*/

/*
[버블 정렬]
인접한 두 개의 요소의 대소를 비교해 자리를 바꿔 정렬하는 알고리즘.
한 번의 정렬이 끝날 때마다 해당 범위의 맨 마지막 요소가 정렬된 상태이므로,
안쪽 반복문의 범위는 length - i - 1 이 된다.

[버블 정렬 최적화]
한 번의 반복에서 swap 이 전혀 일어나지 않았다면 이미 정렬이 완료된 상태이기 때문에
early return 할 수 있다.
*/

const nums = [13, 5, 11, 7, 23, 15];

function bubbleSort(nums) {
  // 전체 배열을 길이만큼 반복한다.
  for (let i = 0; i < nums.length; i++) {
    let swap = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j + 1] < nums[j]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return nums;
}

const result1 = bubbleSort(nums);
console.log(result1);
