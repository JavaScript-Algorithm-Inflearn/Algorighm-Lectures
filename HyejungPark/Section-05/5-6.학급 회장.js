/*
[문제] 학급 회장 - 해쉬 알고리즘

학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.

선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작
성하세요. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
*/

const str = 'BACBACCACCBDEDE';

function solution1(str) {
  // 맵 자료구조 사용 : 중복되지 않는 키 값을 가지는 자료구조. 객체외 다르게 키가 문자열이 아니어도 됨.
  let hash = new Map();
  let leader = '';
  let max = Number.MIN_SAFE_INTEGER;

  for (let key of str) {
    // hash 안에 문자열이 key로 있으면 그 값을 증가
    if (hash.has(key)) {
      // 조회한 값을 증가시킬 때 ++ 연산자 대신 + 1 로 계산해야 적용된다.
      let value = hash.get(key) + 1;
      hash.set(key, value);
    }
    // 없으면 새로 만들고 값을 1로 셋팅
    else {
      hash.set(key, 1);
    }
  }

  // 완성된 hashMap을 키, 밸류 쌍으로 돌면서 max값과 비교해 최대값을 갱신하여 답 도출
  for (let [key, value] of hash) {
    if (max < value) {
      leader = key;
      max = value;
    }
  }

  return leader;
}

const result1 = solution1(str);
console.log(result1);
