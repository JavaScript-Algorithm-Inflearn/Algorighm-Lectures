function solution (n) {
    
    function dfs(m) {
        if (m === 0) return 0
        else {
            dfs (m-1);
            console.log(m);
        }
    }
    dfs(n);
}

solution(3);