/*
[문제] 두 배열 합치기 - 투포인터 알고리즘

오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
을 작성하세요.

[입력]
- 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
-두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
-세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
-네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
- 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

[출력]
- 오름차순으로 정렬된 배열을 출력합니다.
*/

///////////////////////////////////////
// 병합정렬 알고리즘 풀이
function mergeSort(arr1, arr2) {
  const M = arr1.length;
  const N = arr2.length;

  // 병합된 최종 결과물이 들어갈 배열을 두 배열의 길이의 합만큼 0으로 초기화한다.
  let mergedArray = new Array(M + N).fill(0);

  // 각각 arr1, arr2, mergedArray 요소에 접근할 인덱스 변수를 선언한다.
  let i = (j = k = 0);

  // 첫번째 while문에서 둘 중 한 배열의 탐색이 완료될 때 까지 반복하며 각 배열의 요소를 비교한다.
  // while 조건에서 && 연산자를 사용하면 두 조건이 모두 참일때만 반복을 할 수 있으므로,
  // 하나라도 탐색이 완료되어 mergedArray에 모든 요소가 들어가게 된다면, 다음 while문으로 넘어간다.
  // 이러한 조건은 arr1의 요소와 arr2의 요소를 비교하면서 인덱스를 증감시키기 위함.
  while (i < M && j < N) {
    if (arr1[i] < arr2[j]) {
      mergedArray[k++] = arr1[i++];
    } else {
      mergedArray[k++] = arr2[j++];
    }
  }

  // 위 while문에서 마무리되지 못한 배열은, 그 요소가 오름차순으로 정렬되어 있으므로
  // 추가적인 값의 비교 필요 없이 mergedArray의 k번째 요소로 추가한다.
  while (i < M) {
    mergedArray[k++] = arr1[i++];
  }

  while (j < N) {
    mergedArray[k++] = arr2[j++];
  }

  return mergedArray;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

const result1 = mergeSort(arr1, arr2);
// console.log(result1);

///////////////////////////////////////
// 투포인터 알고리즘 풀이

function twoPointer(arr1, arr2) {
  const M = arr1.length;
  const N = arr2.length;

  let p1 = (p2 = 0);
  let mergedArray = [];

  while (p1 < M && p2 < N) {
    if (arr1[p1] < arr2[p2]) mergedArray.push(arr1[p1++]);
    else mergedArray.push(arr2[p2++]);
  }

  while (p1 < M) {
    mergedArray.push(arr1[p1++]);
  }

  while (p2 < N) {
    mergedArray.push(arr2[p2++]);
  }

  return mergedArray;
}

const result2 = twoPointer(arr1, arr2);
console.log(result2);

/*
  [풀이과정]
  
  시도 1. 병합정렬 알고리즘 사용
  - 병합정렬 알고리즘은, 오름차순으로 정렬된 두 배열의 각 요소를 비교해 새로운 배열에 추가하며 병합하는 알고리즘이다.
  - 각 배열의 길이만큼 0으로 초기화된 배열을 생성하고,
  - i, j, k 등으로 배열 1, 배열 2 그리고 병합된 배열을 탐색할 인덱스 변수를 선언한다.
  - i나 j가 탐색중인 배열의 끝에 도달하기 전까지 반복하면서,
  - 배열1[i] < 배열2[j] 를 비교해 더 작은쪽을 병합 배열에 추가하고, 각 인덱스를 증감시킨다.
  - 어느 한 쪽의 병합 정렬이 완료되었을 때, 병합 배열에 추가되지 못한 나머지 요소들은
  - 이미 오름차순으로 정렬이 완료되어 있으므로, 병합배열에 그대로 추가한다.
  
  시도 2. 투포인터 알고리즘 사용
  - 병합정렬 알고리즘과 비슷하지만, 미리 배열을 길이만큼 초기화 하여 별도의 인덱스로 접근하지 않음.
  - p1, p2 인덱스를 사용해 각 배열의 요소를 비교한 뒤에, 해당 요소를 push하고 작은 쪽의 인덱스를 증감시킨다.
  - 한 쪽 배열의 탐색이 모두 종료되면, 나머지 배열의 가리키고 있는 요소부터 끝까지 정답 배열에 추가한다.
  
  # 문제가 간단해서 그런 것 같은데, 이번에 적용한 투포인터 로직이 병합정렬 알고리즘과 똑같다.
  */
