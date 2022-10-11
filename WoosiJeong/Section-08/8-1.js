function solution(n){
    function dfs(m) {
        if(m===0) return;
        else {
            dfs(m-1);
            console.log(m);
        }
    }

    dfs(n);
}

solution(3);