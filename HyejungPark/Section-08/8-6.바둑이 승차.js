/*
[문제] 바둑이 승차 DFS

철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 
그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다. 
철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 
철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.
*/

// 테스트케이스
const C = 259;
const badooks = [81, 58, 42, 33, 61];

// 풀이
function solution(arr) {
  let max = 0;
  let length = badooks.length;

  function DFS(L, sum) {
    // 바둑이 부분집합과 제한 무게를 비교
    if (sum > C) return;
    if (L === length) {
      if (sum <= C && sum >= max) max = sum;
      else return;
    }
    // 바둑이 부분집합의 경우의 수를 만드는 부분
    else {
      // 현재 바둑이 포함
      DFS(L + 1, sum + badooks[L]);
      // 현재 바둑이는 포함하지 않음
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return max;
}

// 출력
const result = solution(badooks);
console.log(result);

/*
- DFS에서 L로 바둑이 배열을 돌면서 바둑이를 태울지 말지 결정한다.
- 최종적으로 바둑이 부분 집합이 완성되었을 때, C, max 와 무게를 비교해서 max를 갱신한다.
*/
