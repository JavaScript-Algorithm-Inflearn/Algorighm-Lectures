function solution(times) {
    let answer = Number.MIN_SAFE_INTEGER; // answer 최소값 설정
    let timeLine = []; // 타임라인 빈 arr 선언
    for(let x of times) {
      timeLine.push([x[0], 's']);// 시작시간으로  arr 형태로 push
      timeLine.push([x[1], 'e']); // 떠나는 시간 arr 형태로 push
    }
    timeLine.sort((a, b) => {
      if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt(); // 시간이 같은 시간일 경우 뒤에 's' 와 'e' 를 비교해서 ASSICI code 가 먼저 인 e 가 먼저 오게 오름차순 정렬
      else return a[0] - b[0]; // 시간이 다를 경우에는 시간 순서대로 오름 차순 정렬
    });
    let cnt = 0;
    for(let x of timeLine) {
      if(x[1] === 's') cnt ++; // s 일경우에는 cnt +1 누적
      else cnt --; // e 일경우에는 cnt -1 누적
      answer = Math.max(answer, cnt); // answer 와 cnt 2개를 계속 비교해서 최대값을 return 함 
    }
    return answer;
  }

  let arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
  ];
  console.log(solution(arr));