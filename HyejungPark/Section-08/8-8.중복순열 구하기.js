/*
[문제] 중복순열 구하기

1부터 N까지 번호가 적힌 구슬이 있습니다. 
이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.

▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.

*/

/*
[풀이]
1. for문이 1부터 n까지 돈다.
2. 첫번째 뎁스의 재귀에서 arr의 0번째 요소가 정해진다.
3. aux가 호출된 이후 다시 for문을 만나 그 다음 요소가 정해진다.
4. for문으로 계속해서 0번째, 1번째 ... 다음 요소를 정해주기 때문에 1부터 n까지 반복되는 요소를 넣어 중복순열을 만들 수 있다.
*/

function permutation(n, m) {
  // 중복 순열이 들어갈 전체 배열
  let answer = [];

  // 재귀적으로 반복하며 중복 순열을 뽑는 함수
  function aux(arr, L) {
    // 종료조건 : L이 0이 될 때, 전체 배열에 완성된 arr을 pus한다.
    if (L === 0) {
      answer.push(arr);
    }
    // 재귀조건
    else {
      for (let i = 1; i <= n; i++) {
        aux([...arr, i], L - 1);
      }
    }
  }
  aux([], m);
  return answer;
}

const result = permutation(3, 2);
console.log(result);

function reference(n, m) {
  let answer = [];
  // tmp 배열을 m의 길이만큼 0으로 초기화하여 선언한다.
  let tmp = Array.from({length: m}, () => 0);

  // 재귀함수
  function DFS(L) {
    // L은 0부터 시작해서 m에서 끝난다.
    // 종료조건에 도달했을 때, 전체 배열에 만들어진 tmp 배열의 복사본을 push 한다.
    if (L === m) {
      answer.push(tmp.slice());
    }
    // 재귀조건
    // 1부터 n까지 돈다.
    // tmp의 L번째 인덱스(이 문제에서는 0,1까지)에 1부터 n까지 담는다.
    else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

const refResult = reference(3, 2);
console.log(refResult);
