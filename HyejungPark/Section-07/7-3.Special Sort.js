/*
[문제] Special Sort(구글 인터뷰) - 버블정렬 응용
N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 
또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

=> -3, -2, -6 의 순서는 유지한 채 양수의 앞쪽으로 정렬되어야 한다. 

*/

const nums = [1, 2, 3, -3, -2, 5, 6, -6];

// 풀이 1
// 정렬 알고리즘이 아니고 stack 을 활용했다.
// nums 를 반복해서 요소가 음수인 경우 answer 배열에 미리 추가하고, 기존 요소는 0으로 초기화
// 그 다음 반복문에서 요소가 0이 아닌 경우에만 answer 배열에 push 해주었다.
// O(n)
function solution1(nums) {
  const numbers = nums.slice();
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      answer.push(numbers[i]);
      numbers[i] = 0;
    }
  }
  numbers.forEach(num => {
    if (num) answer.push(num);
  });

  return answer;
}

// const result1 = solution1(nums);
// console.log(result1);

// reference code
function specialSort(nums) {
  let numbers = nums.slice();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      // 좌측 숫자가 양수, 우측 숫자가 음수일 경우만 swap 한다.
      if (numbers[j] > 0 && numbers[j + 1] < 0) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  return numbers;
}

const result2 = specialSort(nums);
console.log(result2);
