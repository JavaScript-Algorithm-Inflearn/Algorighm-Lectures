// 메모이제이션
// - 시간복잡도: O(N)
// - 예시: 피보나치

// function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.
//     let memo = [0, 1];
//     let aux = (n) => {
//       if(memo[n] !== undefined) return memo[n];
//       memo[n] = aux(n - 1) + aux(n - 2);
//       return memo[n];
//     }
//     return aux(n);
//   }

//   let output = fibonacci(5);
//   console.log(output); 

function solution(n, r){         
    let count = 0;
    let twoArr = Array.from(Array(33), () => Array(33).fill(0));
    
    let dfs = (n, r) => {
        if(twoArr[n][r] === undefined) return twoArr[n][r];
        if(n === r || r === 0) return 1;
        else return twoArr[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r)
    }
    count = dfs(n, r);
    return count;
}

console.log(solution(5, 3));