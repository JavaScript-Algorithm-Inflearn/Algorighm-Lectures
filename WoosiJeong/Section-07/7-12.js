function count(stable, dist) {
    let cnt = 1, ep = stable[0]; // cnt 는 무조건 1개는 되니까 1로 시작하고, end point 경우에는 arr 의 가장 앞에 부분을 설정함
    for(let i=1; i<stable.length; i++) { // i는 1부터 arr 끝까지 검색 시작
      if(stable[i] - ep >= dist) { // stable 좌표에 말을 넣을 수 있느냐 없느냐를 체크 하는것, 가장 가까운 말의 두 거리보다 가까워야 하는것 크거나 같아야지 마구간에다가 말을 배치 할 수 있는것
        cnt++; // 말의 개수 증가 
        ep = stable[i];
      }
    }
    return cnt; 
  }
  function solution(c, stable) {
    let answer;
    stable.sort((a, b) => a - b); // 숫자 오름 차순 정렬
    let lt = 1; 
    let rt = stable[stable.length - 1 ]; // zero base 이니까 -1 해줌
    while(lt <= rt) { // 이분 검색 시작  
      let mid = parseInt((lt + rt) / 2); // mid 값 정하기
      if(count(stable, mid) >= c) { // mid 라는 거리가 가장 가까운 2 말의 거리를 만드는 것, c 마리 이상이 같거나 커야 true 가 됨
        answer = mid;
        lt = mid + 1; // 더 최대인 값을 찾기 위해서 lt 이동
      }
      else rt = mid  - 1;
    }
    return answer;
  }
  let arr = [1, 2, 8, 4, 9];
  console.log(solution(3, arr));
