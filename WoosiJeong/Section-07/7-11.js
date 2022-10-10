function count(songs, mid) {
    let sum = 0;
    let cnt = 1;                                        // 틀린 부분 (cnt = 0)
    for (let x of songs) {
      sum += x;
      if (sum > mid) {
        cnt++;
        sum = x;
      }
    }
    return cnt;
  }
  
  function solution(m, songs) {
    let answer;
    let l = Math.max(...songs);
    let r = songs.reduce((sum, v) => sum + v, 0);
    while (l <= r) {
      let mid = parseInt((l + r) / 2);
      if (count(songs, mid) <= m) {
        answer = mid;                                   // 틀린 부분 (아예 마지막에 맞은 답을 저장 안함)
        r = mid - 1;
      } else l = mid + 1;
    }
    return answer;
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(solution(3, arr));