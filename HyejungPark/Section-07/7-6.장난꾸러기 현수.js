/*
[문제] 장난꾸러기 현수
새 학기가 시작되었습니다. 현수는 새 짝꿍을 만나 너무 신이 났습니다.
현수네 반에는 N명의 학생들이 있습니다.

선생님은 반 학생들에게 반 번호를 정해 주기 위해 운동장에 반 학생들을 키가 가장 작은 학생부터 일렬로 키순으로 세웠습니다. 제일 앞에 가장 작은 학생부터 반 번호를 1번부터 N번까지 부여합니다. 
현수는 짝꿍보다 키가 큽니다. 그런데 현수가 앞 번호를 받고 싶어 짝꿍과 자리를 바꿨습니다. 선생님은 이 사실을 모르고 학생들에게 서있는 순서대로 번호를 부여했습니다.

현수와 짝꿍이 자리를 바꾼 반 학생들의 일렬로 서있는 키 정보가 주어질 때 현수가 받은 번
호와 현수 짝꿍이 받은 번호를 차례로 출력하는 프로그램을 작성하세요.

배열 중에서 현수의 위치와 짝꿍의 위치를 찾는 문제. 
짝꿍은 양 옆으로 큰 애들 사이에 있고, 현수는 양 옆으로 작은 애들 사이에 있다.
키 순서니까 현수가 i 일 때는 i-1 < i > i + 1 
짝꿍이 j 일 때는 j - 1 > j < j + 1
=> 이 때 문제는 현수와 짝꿍 양 옆에 있는 친구들도 저 조건에 해당한다는 것.
=> 증가, 감소 여부를 비교하는게 아니고 정렬로 풀면 쉽게 풀 수 있다..?!

=> 먼저 정렬을 한 뒤에 서로 다른 부분을 확인..!
*/

const heights = [120, 125, 152, 130, 135, 135, 143, 127, 160];

function solution1(heights) {
  let answer = [];
  let sortArr = heights.slice().sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (sortArr[i] !== heights[i]) answer.push(i + 1);
  }
  return answer;
}

const result1 = solution1(heights);
console.log(result1);
