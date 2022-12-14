/*
[문제]
N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 
두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.

둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주 어진 원래의 집합이 되어야 합니다.

예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.
*/
const arr = [1, 3, 5, 6, 7, 10];

function solution(arr) {
  // 모든 재귀를 다 반복했을 때 YES로 바뀌지 않으면 NO이다.
  let answer = 'NO';
  // 원본 배열의 합
  const arrSum = arr.reduce((acc, cur) => acc + cur, 0);
  const N = arr.length;
  // 재귀는 반복문처럼 빠져나올 수 없기 때문에, 특정 조건이 완료되면 더이상 나머지 로직을 실행하지 않도록 처리해야한다.
  let flag = false;
  function DFS(L, sum) {
    // flag가 false일 때만 실행.
    if (!flag) {
      // 만들어진 부분집합을 확인하는 부분.
      if (L === N) {
        if (arrSum - sum === sum) {
          flag = true;
          answer = 'YES';
        }
      }
      // 부분집합을 만드는 부분 : 포함한다, 포함하지 않는다 각 경우를 조합하여 최종적인 부분집합을 만들어 나간다.
      else {
        // arr[L] 현재 원소를 포함하는 경우
        DFS(L + 1, sum + arr[L]);

        // 현재 원소를 포함하지 않는 경우
        DFS(L + 1, sum);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

const result = solution(arr);
console.log(result);

/*
- DFS 인 이유는 한 원소에 대해서 그 원소를 부분집합에 포함시키느냐, 포함시키지 않느냐를 결정하는 이진트리를 만들 수 있기 때문이다.
- DFS를 반복하다가 결과가 반영된 부분집합이 완성되는 시점은 L이 배열의 끝에 도달했을 때.
- 문제는 이 부분집합의 요소가 아니라, 부분집합의 합을 구해서, 포함되지 않은 원소의 합과 비교하는 것이다.
- 따라서 DFS 를 호출할 때 sum 을 계속 누적시키다가 마지막에 arrSum - sum을 하면 나머지 부분집합의 합을 구할 수 있다.

=> DFS 로 풀 때 어떤 부분이 반복되어야 하는지 잘 이해를 하지 못했다. 부분집합이기 때문에 집합에서는 포함한다, 포함하지 않는다로 경우를 나눌 수 있음을 이해해야함. 그리고 부분집합을 실제로 만들려고 했는데, 원소 자체가 아니라 합이 중요한 것이기 때문에 메모리를 낭비하지 않고 더 간단하게 풀 수 있었다.
*/
