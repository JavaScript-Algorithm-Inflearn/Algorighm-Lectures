// dy[j]: arr[i]를 제일 마지막에 둘 때 만들 수 있는 수열으 최대 길이
// 맨 처음 1가지의 수로 만들 수 있는 최대 수열의 길이는 1이다. (dp[0]=1)

// 예를 들어 i===3 일 때, dy[3]을 구하려면 arr[3]을 기준으로 i-1~0까지 반복문을 돌면서 arr[3]과 arr[j]의 대소 관계를 비교한다. 
// 만약, arr[i] > arr[j]라면, dp[j] 중 제일 큰 값에 +1을 해서 dp[i]에 넣어줘야 한다. 
// +1을 해주는 이유는 나를 제외한 현재 최대 수열의 길이가 dp[j]이므로 여기에 나를 붙이면 수열의 길이는 1 증가하기 때문이다.
// 그리고 바로 이전의 dp[j]만 비교하는 것이 아니고 i-1~0까지 모든 dp[j]를 조사하므로 dp[j]>max 조건을 같이 넣어주어 max 변수를 최대 값으로 갱신하는  방법을 사용 (dp[j] > max면 max=dp[j])


function solution(arr){  
  let answer=0;
  let dy=Array.from({length:arr.length}, ()=>0);
  dy[0]=1;
  for(let i=1; i<arr.length; i++){
      let max=0;
      for(let j=i-1; j>=0; j--){
          if(arr[j]<arr[i] && dy[j]>max){
              max=dy[j];
          }
      }
      dy[i]=max+1;
      answer=Math.max(answer, dy[i]);
  }
  return answer;
}


// 입력
// 8
// 5 3 7 8 6 2 9 4
 
// 코드
// let n = 8;
// let arr = [5, 3, 7, 8, 6, 2, 9, 4];
 
// console.log(solution(n, arr));
 
// function solution(n, arr){
//   if (n === 1) return 1;
//   let dp = Array.from({length: n}, () => 0);
//   let answer = 0;
 
//   dp[0]=1;
 
//   for (let i=1; i<n; i++){
//     let max=0;
//     for (let j=i-1; j>=0; j--){
//       if (arr[i] > arr[j] && dp[j] > max) max = dp[j]
//     }
//     dp[i]=max+1;
//     answer = Math.max(answer, dp[i]);
//   }
//   return answer;
// }
 
// 👉🏽 4

