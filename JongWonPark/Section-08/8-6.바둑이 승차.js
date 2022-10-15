/*
[문제] 바둑이 승차 - DFS
- 철수는 그의 바둑이들을 데리고 시장에 가려고 한다.
- 그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다.
- 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
- N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.

[입력]
- 첫 번째 줄에 자연수 C(1<=C<=100,000,000)와 N(1<=N<=30)이 주어집니다.
- 둘째 줄부터 N마리 바둑이의 무게가 주어진다.

[출력]
- 첫 번째 줄에 가장 무거운 무게를 출력한다.

[입력예제 1]
- 259, [81, 58, 42, 33, 61]

[출력예제 1]
- 242
*/

/** 풀이1 */
const solution1 = (c, arr) => {
  let result = 0;

  const aux = (level, sum) => {
    if (level === arr.length) {
      if (sum <= c) result = Math.max(result, sum);
    } else {
      aux(level + 1, sum + arr[level]);
      aux(level + 1, sum);
    }
  };

  aux(0, 0);

  return result;
};

/** 레퍼런스 */
const reference = (c, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
};

/** 테스트 케이스1 */
let c = 259;
let arr = [81, 58, 42, 33, 61];

console.log('1:', solution1(c, arr)); // 242
console.log('1:', reference(c, arr)); // 242
