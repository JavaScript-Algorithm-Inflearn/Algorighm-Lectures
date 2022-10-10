function solution(target, arr) {
    let answer;
    arr.sort((a, b) => a - b); // 오름차순 정렬
    let lt = 0, rt = arr.length - 1; // lt 와 rt 는 index 번호 임
    while(lt <= rt) { // lt 가 증가되고, rt 는 감소 하기 때문에, 같이지거나 rt가 커킬때 break 거는것임
      let mid = Math.floor((lt + rt) / 2); // mid 는 가운데 번호 -> 정수형으로 몫만 가질 수 있게 함
      if(arr[mid] === target) { // mid 가 target 이랑 같을 경우
        answer = mid + 1; // answer는 바로 mid + 1 로 return 
        break;
      }
      else if(arr[mid] > target)  rt = mid - 1;// mid 값이 더 클경우,  rt가 mid - 1 로 이동
      else lt = mid + 1 // target 이 더 클 경우에는, lt 가 mid + 1 로 이동
    }
    return answer;
  }

  let arr = [23, 87, 65, 12, 57, 32, 99, 81];
  console.log(solution(32, arr));