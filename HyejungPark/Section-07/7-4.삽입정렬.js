/*
[문제]
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 삽입정렬입니다.

현재 i 위치 좌측으로는 이미 요소가 정렬된 상태이고, i값과 좌측의 값들을 비교해
i의 적절한 위치를 찾아 삽입하는 정렬방식.
*/
const nums = [11, 7, 5, 6, 10, 9];

function insertionSort(nums) {
  let N = nums.length;

  for (let i = 1; i < N; i++) {
    // i는 언제나 1번째부터 시작하고, temp 변수에 i의 현재 값을 보관한다.
    let temp = nums[i];
    // j는 언제나 i - 1의 위치에서 시작한다.
    let j = i - 1;
    // 만약에 j 가 0 이상이고, i위치의 값보다 j위치의 값이 더 큰 상태라면
    // 즉 temp가 좌측에 있는 요소보다 작다면 올바를 위치를 찾을 때까지 반복문을 돌려준다.
    while (j >= 0 && nums[j] > temp) {
      // j의 바로 다음 위치에 이전 j 값을 담아주면서 칸을 한 칸씩 우측으로 이동시키고,
      // j는 좌측으로 계속 이동시킨다.
      nums[j + 1] = nums[j];
      j--;
    }
    // 조건문을 벗어난 경우 최종적으로 temp의 위치가 확정되므로 j + 1의 위치에 temp를 삽입한다.
    // j + 1인 이유는
    // 1. j가 while문을 거치면서 계속 감소했기 때문이고
    // 2. 만약 현재 잘 정렬이 된 상태라 while문에 진입하지 않았다면 현재 i의 자리에 temp가 들어간다. 즉 움직이지 않는다는 것.
    nums[j + 1] = temp;
    console.log(i, '회전: ', nums);
  }

  return nums;
}

const result1 = insertionSort(nums);
console.log(result1);
