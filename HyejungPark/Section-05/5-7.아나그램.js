/*
[문제] 아나그램 - Hash Algorithm

Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.

예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면
A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다. 
즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.

길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세
요. 아나그램 판별시 대소문자가 구분됩니다.

[입력]
두 개의 문자열

[출력]
두 문자열이 아나그램이면 'YES' 아니면 'NO' 를 출력한다.
*/

const str1 = 'abaCa';
const str2 = 'Caaab';

// 해쉬맵 생성 함수
function getHashMap(str) {
  let hash = new Map();

  for (let key of str) {
    if (hash.has(key)) {
      let value = hash.get(key) + 1;
      hash.set(key, value);
    } else {
      hash.set(key, 1);
    }
  }
  return hash;
}

function solution1(str1, str2) {
  // 두 문자열에 대한 맵을 각각 변수에 할당
  let str1Hash = getHashMap(str1);
  let str2Hash = getHashMap(str2);

  // 길이가 같은 문자열이기 때문에 어느 한 쪽을 기준으로 판단해도 된다.
  // 첫번째 문자열의 key를 기준으로 반복을 돌아 해당 키가 str2에 존재하는지
  // 그리고 존재하는 경우 값이 같은지를 확인해 다른 경우 No를 리턴하고 끝낸다.
  for (let key of str1Hash.keys()) {
    if (!str2Hash.has(key) || str1Hash.get(key) !== str2Hash.get(key)) return 'NO';
  }

  // No가 아닌 경우 Yes 이므로 리턴한다.
  return 'YES';
}

const result1 = solution1(str1, str2);
console.log(result1);

// 해답 코드
function solution2(str1, str2) {
  let answer = 'YES';
  let hash = new Map();

  // str 1 에 대하여 각 문자열을 키로, 갯수를 값으로 하는 map 객체를 생성한다.
  for (let x of str1) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }

  // 문자열 str2를 반복하면서,
  // 1. str1에 대한 해쉬 맵에 키가 존재하지 않거나(문자열이 일치하지 않음)
  // 2. 조회한 값이 0이면 (갯수가 같지 않음) No를 리턴하고 종료한다.
  // 3. 리턴이 되지 않은 경우 일치하는 문자열이 존재하므로, 맵에서 해당 문자열에 대한 값을 -1 한 뒤에 반복을 진행.
  for (let x of str2) {
    if (!hash.has(x) || hash.get(x) === 0) return 'NO';
    hash.set(x, hash.get(x) - 1);
  }

  return answer;
}

const result2 = solution2(str1, str2);
console.log(result2);
