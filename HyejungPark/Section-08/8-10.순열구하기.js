/*
[문제]
10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.

▣ 입력예제 1 
3 2
3 6 9

▣ 출력예제 1
3 6
3 9
6 3
6 9
9 3
9 6
6
*/

const M = 2;
const arr = [3, 3, 6, 9];

// 이 풀이의 경우 includes 메서드를 사용해서 중복을 제거하기 때문에, 여러개의 같은 요소가 있는 배열에서 순열을 구할 경우 원하지 않는 결과가 나올 수 있음.
function permutation(m, arr) {
  let answer = [];
  function aux(L, tmp) {
    if (L === m) {
      answer.push(tmp);
    } else {
      // arr을 하나씩 반복하면서 tmp 에 현재 요소가 있는지 없는지 확인하여 중복을 제거한다.
      for (let el of arr) {
        if (!tmp.includes(el)) {
          let selected = el;
          // 중복이 없다면 요소 하나를 선택해 tmp 배열에 넣고 다시 재귀를 반복한다.
          aux(L + 1, [...tmp, selected]);
        }
      }
    }
  }

  aux(0, []);
  return answer;
}

const result = permutation(M, arr);
console.log(result);

function reference(m, arr) {
  let answer = [];
  let tmp = new Array(m).fill(0);
  let visited = new Array(arr.length).fill(0);
  function aux(L) {
    if (L === m) {
      // tmp가 계속 변경되고 있기 때문에 매 순간의 tmp의 복사본을 넣어줘야함.
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        // 현재 위치의 visited 가 0이라면
        if (!visited[i]) {
          // 방문했다는 의미로 1로 바꿔주고
          visited[i] = 1;
          // tmp에 arr의 i번째 요소를 할당한 뒤에
          tmp[L] = arr[i];
          // 재귀호출하여 tmp의 다음 자리에 들어갈 요소를 넣는다.
          aux(L + 1);
          // 재귀에서 탈출해서 돌아오면 해당 위치의 visited 배열을 0으로 초기화한다.
          visited[i] = 0;
        }
      }
    }
  }

  aux(0);
  return answer;
}

const refResult = reference(M, arr);
console.log(refResult);
