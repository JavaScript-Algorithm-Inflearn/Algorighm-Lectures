/*
[문제] 아나그램 - Hash Map
- Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
- 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만
- 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
- 즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
- 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
- 아나그램 판별시 대소문자가 구분됩니다.

[입력]
- 첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다.
- 단어의 길이는 100을 넘지 않습니다.

[출력]
- 두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.

[입력예제 1]
- 'AbaAeCe', 'baeeACA'

[출력예제 1]
- 'YES'

[입력예제 2]
- 'abaCC', 'Caaab'

[출력예제 2]
- 'NO'
*/

/** 풀이1 - 2개의 Map 객체 이용. 시간복잡도 N */
const nativeSolution = (str1, str2) => {
  const sH1 = new Map();
  const sH2 = new Map();

  for (const x of str1) {
    if (sH1.has(x)) sH1.set(x, sH1.get(x) + 1);
    else sH1.set(x, 1);
  }

  for (const x of str2) {
    if (sH2.has(x)) sH2.set(x, sH2.get(x) + 1);
    else sH2.set(x, 1);
  }

  for (const [key, value] of sH1) {
    if (!sH2.has(key) || value !== sH2.get(key)) return "NO";
  }

  return "YES";
};

/** 풀이2 - 1개의 Map 객체 이용. 시간복잡도 N */
const solution = (str1, str2) => {
  const sH1 = new Map();

  for (const x of str1) {
    if (sH1.has(x)) sH1.set(x, sH1.get(x) + 1);
    else sH1.set(x, 1);
  }

  for (const x of str2) {
    if (!sH1.has(x) || sH1.get(x) === 0) return "NO";

    sH1.set(x, sH1.get(x) - 1);
  }

  return "YES";
};

/** 테스트 케이스1 */
let str1 = "AbaAeCe";
let str2 = "baeeACA";

console.log(nativeSolution(str1, str2)); // 'YES'
console.log(solution(str1, str2)); // 'YES'

/** 테스트 케이스2 */
str1 = "abaCC";
str2 = "Caaab";

console.log(nativeSolution(str1, str2)); // 'NO'
console.log(solution(str1, str2)); // 'NO'
