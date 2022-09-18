/*
[문제] 모든 아나그램 찾기 - 해쉬, 투포인터, 슬라이딩 윈도우

S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 
아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

*/

const S = 'bacaAacba';
const T = 'abc';

// 문자열이 주어지면 해시 맵을 생성하는 함수
function generateHash(str) {
  let hash = new Map();

  // 문자열을 l로 반복해서, 맵 객체에 키가 있으면 값을 추가,
  // 존재하지 않으면 값을 1로 셋팅
  for (l of str) {
    if (hash.has(l)) {
      let value = hash.get(l) + 1;
      hash.set(l, value);
    } else {
      hash.set(l, 1);
    }
  }

  return hash;
}

// 두 맵 객체가 주어졌을 때 동일 여부 비교 함수
function compareMaps(map1, map2) {
  // 먼저 사이즈가 같은지 판단하고,
  if (map1.size !== map2.size) {
    return false;
  }
  // 사이즈가 같은 경우 한 쪽의 키와 밸류를 가지고
  // 키가 있는지 여부 확인, 값이 같은지 여부를 확인한다.
  else {
    for (let [key, val] of map1) {
      if (!map2.has(key) || map2.get(key) !== val) return false;
    }
  }
  return true;
}

function solution1(S, T) {
  const Tlen = T.length;
  const Slen = S.length;

  // 비교 대상인 T 문자열에 대한 맵 객체 생성,
  // T의 길이 만큼의 범위를 가진 S의 부분 문자열에 대한 맵 객체 생성
  let tH = generateHash(T);
  let sH = generateHash(S.substring(0, Tlen - 1));

  // 같을 경우 증감시킬 카운터와, lt 포인터를 0으로 셋팅한다.
  let count = 0;
  let lt = 0;
  // lt = 0, rt = 새로운 값을 추가하면서 비교 시작
  for (let rt = Tlen - 1; rt < Slen; rt++) {
    // sH 가 S[rt] 키를 가지고 있다면, 그 값의 + 1,
    // 키가 존재하지 않으면 값을 1로 설정
    if (sH.has(S[rt])) sH.set(S[rt], sH.get(S[rt]) + 1);
    else sH.set(S[rt], 1);

    // tH와 sH 두 맵을 비교해 같으면 카운트를 증가
    if (compareMaps(sH, tH)) count++;

    //S[lt] 포인터에 해당하는 값을 -1 한 뒤,
    sH.set(S[lt], sH.get(S[lt]) - 1);
    // 만약 그 키의 값이 0이라면, 존재하지 않는 문자열이므로 키 자체를 삭제한다.
    if (sH.get(S[lt]) === 0) sH.delete(S[lt]);
    // 윈도우가 앞으로 한 칸 이동했으므로 lt 를 증감한 뒤 해당 반복이 마무리된다.
    lt++;
  }

  return count;
}

const result = solution1(S, T);
console.log(result);
