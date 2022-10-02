/*
[문제] Least Recently Used(카카오 캐시 문제 변형) Insertion Sort 응용

캐시메모리는 CPU와 주기억장치(DRAM) 사이의 고속의 임시 메모리로서 CPU가 처리할 작업을 저장해 놓았다가 필요할 때 바로 사용해서 처리속도를 높이는 장치이다. 워낙 비싸고 용량이 작아 효율적으로 사용해야 한다. 

철수의 컴퓨터는 캐시메모리 사용 규칙이 LRU 알고리즘을 따른다. 
LRU 알고리즘은 Least Recently Used 의 약자로 직역하자면 가장 최근에 사용되지 않은 것 정도의 의미를 가지고 있습니다. 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘입니다. 

만약 캐시의 사이즈가 5이고 작업이 2 3 1 6 7 순으로 저장되어 있다면,
(맨 앞이 가장 최근에 쓰인 작업이고, 맨 뒤는 가장 오랫동안 쓰이지 않은 작업이다.)

1) Cache Miss : 해야할 작업이 캐시에 없는 상태로 위 상태에서 만약 새로운 작업인 5번 작
업을 CPU가 사용한다면 Cache miss가 되고 모든 작업이 뒤로 밀리고 5번작업은 캐시의 맨앞에 위치한다.
5 2 3 1 6 (7번 작업은 캐시에서 삭제된다.)

2) Cache Hit : 해야할 작업이 캐시에 있는 상태로 위 상태에서 만약 3번 작업을 CPU가 사용 한다면 Cache Hit가 되고, 63번 앞에 있는 5, 2번 작업은 한 칸 뒤로 밀리고, 3번이 맨 앞으
로 위치하게 된다.
5 2 3 1 6
--->
3 5 2 1 6

캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면
N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는
프로그램을 작성하세요.

*/

/*
[문제 접근]
캐시의 크기와 N개의 작업이 주어질 때 작업을 순차적으로 처리한 뒤 가장 마지막 캐시의 상태.

=> 캐시가 다 찰 때까지 작업을 추가.
1. 캐시에 있는 작업을 해야한다 => 해당 작업을 맨 앞으로, 그 앞에 있던 요소들을 한칸씩 뒤로.
2. 캐시에 없는 작업을 해야한다 => 작업을 맨 앞에 삽입하고, 맨 뒤 요소를 삭제한다.

*/

const N = 5;
const tasks = [1, 2, 3, 2, 6, 2, 3, 5, 7];

// 시도 1.
// cache에 현재 task의 존재 여부를 판단해 분기하는 로직은 맞는데
// 비교 과정에서 includes와 indexOf를 동시에 사용하고 있어서
// 효율성이 낮은 것 같다.
function recentlyUsedCache1(N, tasks) {
  // 주어진 크기만큼 캐시 생성
  const cache = new Array(N).fill(0);
  // task를 하나씩 반복하며 miss 인지 hit인지 판별한다.
  for (let task of tasks) {
    console.log(cache);
    // hit : cache 안에 같은 작업이 들어있는 경우
    if (cache.includes(task)) {
      // cache 에 해당하는 요소의 인덱스를 idx에 저장
      let idx = cache.indexOf(task);
      // idx 부터 시작해 cache의 0번째 인덱스까지 돌면서,
      // 앞에 있는 값을 하나씩 뒤로 옮겨준다.
      for (let i = idx; i >= 0; i--) {
        if (cache[i - 1]) {
          cache[i] = cache[i - 1];
          cache[i - 1] = task;
        }
      }
    }
    // miss : cache 안에 없는 작업을 추가해야하는 경우
    else {
      // 캐시 마지막부터 2번째 요소까지 반복하면서 앞에 있는 요소를 뒤로 하나씩 옮겨준다
      for (let i = N - 1; i >= 1; i--) {
        if (cache[i - 1]) cache[i] = cache[i - 1];
      }
      // 옮기는 작업이 끝난 경우 현재 task를 cache 의 0번째 인덱스에 추가해준다.
      cache[0] = task;
    }
  }
  return cache;
}

// const result1 = recentlyUsedCache1(N, tasks);
// console.log(result1);

// reference 1
// indexOf 메서드의 결과값에 따라서 miss 인지 hit 인지 여부를 판단하여 분기함.
// 포함 여부와 인덱스 위치를 2중으로 검사했던 내 코드에 비해서 훨씬 깔끔하다.
// 공통적으로 들어가는 cache[0] = task 의 경우 miss와 hit 일 경우 모두 동일하게 적용해줌.
function recentlyUsedCache2(N, tasks) {
  // N 사이즈만큼 0으로 초기화된 cache 배열 생성
  let cache = new Array(N).fill(0);

  // task를 하나씩 돌며 miss 인지 hit 인지 indexOf의 결과값으로 판단.
  for (let task of tasks) {
    let position = cache.indexOf(task);
    // miss
    if (position === -1) {
      for (let i = N - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }
    // hit
    else {
      for (let i = position; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }
    // miss, hit 에 대한 cache의 이동 종료 후 cache 에 task 추가
    cache[0] = task;
  }

  return cache;
}

const result2 = recentlyUsedCache2(N, tasks);
console.log(result2);

// reference 2
// 배열 내장 메서드를 활용한 방식
function recentlyUsedCache3(N, tasks) {
  let cache = new Array(N).fill(0);

  for (let task of tasks) {
    let position = cache.indexOf(task);

    // miss
    if (position === -1) {
      cache.unshift(task);
      if (cache.length > N) cache.pop();
    }
    // hit
    else {
      cache.splice(position, 1);
      cache.unshift(task);
    }
  }

  return cache;
}
const result3 = recentlyUsedCache3(N, tasks);
console.log(result3);
