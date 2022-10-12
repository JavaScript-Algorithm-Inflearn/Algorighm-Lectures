// function solution(n) {
//     function dfs(m) {
//         if (m === 0) return 0;
//         else {
//             dfs(parseInt(m/2));
//             console.log(m%2);
//         }
//     }
//     dfs(n);
// }

// solution(11);

// function solution(n) {
//     let result='';
//     function dfs(m) {
//         if (m === 0) return 0;
//         else {
//             dfs(parseInt(m/2));
//             console.log(result+=String(m%2));
//         }
//     }
//     dfs(n);
// }

// solution(11);

function solution(n) {
    let result='';
    function dfs(m) {
        if (m === 0) return 0;
        else {
            dfs(parseInt(m/2));
            result+=String(m%2);
        }
    }
    dfs(n);
    return result;
}

console.log(solution(11));