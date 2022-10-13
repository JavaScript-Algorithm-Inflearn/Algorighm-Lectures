// function solution(v) {
//     function dfs(v) {
//             if(v>7) return;
//             else{
//                 console.log(v);
//                 dfs(v*2);
//                 dfs(v*2+1);
//         }
//     }
//     dfs(v);
// }

// solution(1);

function solution(n) {
    let result = '';
    function dfs(m) {
        if(m > 7) return;
        else {
            result +=m;
            dfs(m*2);
            dfs(m*2+1);
        }
    }
    dfs(n);
    return result;
}

console.log(solution(1));