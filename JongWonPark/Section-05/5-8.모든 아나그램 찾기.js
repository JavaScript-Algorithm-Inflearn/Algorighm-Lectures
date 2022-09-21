/*
[문제] 모든 아나그램 찾기 - Hash Map, Two Pointers Algorithm, Sliding Window
- S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
- 아나그램 판별시 대소문자가 구분됩니다.
- 부분문자열은 연속된 문자열이어야 합니다.

[입력]
- 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
- S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

[출력]
- S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

[입력예제 1]
- 'bacaAacba', 'abc'

[출력예제 1]
- 3
*/

/** 풀이 - Map 객체, 투 포인터 알고리즘, 슬라이딩 윈도우 이용. 시간복잡도 N^2 */
function solution(s, t) {
  // 2개의 맵 객체의 key-value 쌍이 같은지 비교하는 함수
  const compareMaps = (map1, map2) => {
    if (map1.size !== map2.size) return false;

    for (const [key, val] of map1) {
      if (!map2.has(key) || map2.get(key) !== val) return false;
    }

    return true;
  };

  let result = 0;
  const tH = new Map();
  const sH = new Map();

  // Map 객체 인스턴스 tH 값 넣기
  for (const x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  // Map 객체 인스턴스 sH 초기값 넣기
  for (let i = 0; i < t.length - 1; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let left = 0;

  for (let right = t.length - 1; right < s.length; right++) {
    // s[right] 쌍 추가
    if (sH.has(s[right])) sH.set(s[right], sH.get(s[right]) + 1);
    else sH.set(s[right], 1);

    // sH, tH의 key-value 쌍이 같다면 카운트
    if (compareMaps(sH, tH)) result++;

    // s[left] 제거
    sH.set(s[left], sH.get(s[left]) - 1);
    if (sH.get(s[left]) === 0) sH.delete(s[left]);
    left++;
  }
  return result;
}

/** 테스트 케이스1 */
let str1 = "bacaAacba";
let str2 = "abc";

console.log(solution(str1, str2)); // 3
