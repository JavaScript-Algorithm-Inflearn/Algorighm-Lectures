function solution(arr){
    let result = [];
    let sortedArr = arr.slice();                            // 깊은 복사, 만약에 이중 배열이면 얕은 복사 됨
    sortedArr.sort((a, b) => a - b);
    for(let i=0; i < arr.length; i++) {
        if(arr[i] !== sortedArr[i]) result.push(i+1);
    }

    return result;
}

// let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr=[120, 130, 150, 150, 130, 150];
console.log(solution(arr));