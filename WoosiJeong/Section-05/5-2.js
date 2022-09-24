// 2. 공통원소구하기(Two Pointers Algorithm)

// 두 배열 0번째 배열을 비교했을 때 값이 작은 배열을 증가시켜서 비교한다.
// 값이 같아서 push를 시킨 경우에는 두 배열 다 증가시킨다.
// 배열 둘 중에 하나가 끝나면 그만한다.

// 바로 후위연산자(증감 연산자를 변수 뒤에서 사용)를 이용해서 증가시키는 방법 처음 알았음
// 콜백함수를 지정하지 않고 그냥 sort를 사용하면 ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음

// 참고: https://dudmy.net/javascript/2015/11/16/javascript-sort/



function solution(arr1, arr2){
    let result = [];
    arr1.sort((a, b) => a - b);                             // 각 배열마다 정렬을 한다.
    arr2.sort((a, b) => a - b);
    let p1 = p2 = 0;                                        // p1과 p2를 잡아서 0으로 초기화 한다.
    
    while(p1 < arr1.length && p2 < arr2.length) {           // 이전 문제와 같이 두 배열 중 하나라도 해당 배열의 길이와 같아지면 반복문 종료 
        if(arr1[p1] === arr2[p2]) {                         // 만약에 둘의 원소가 같다! 
            result.push(arr1[p1++]);                        // 그러면 둘 중 하나만 푸시하면 된다. 일단 arr1[p1]을 푸시하고 1을 증가
            p2++;                                           // p2도 똑같이 증가
        }                                                   
                                                            // 만약에 둘 다 같지 않다면 작은 수의 인덱스를 증가시킨다
        else if(arr1[p1] < arr2[p2]) p1++;                  // arr1[p1]이 arr2[p2]보다 작다면 p1을 증가
        else p2++;                                          // arr2[p2]가 arr1[p1]보다 작다면 p2를 증가
    }
    return result;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));























// function solution(arr1, arr2){
//     let answer=[];
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => a - b);
//     let p1=p2=0;
//     while(p1<arr1.length && p2<arr2.length){ // 누군가 하나 거짓이면 반복문 끝남
//         if(arr1[p1]===arr2[p2]){
//             answer.push(arr1[p1++]);
//             p2++;
//         }
//         else if(arr1[p1]<arr2[p2]) p1++;
//         else p2++;
//     }              
//     return answer;
// }

// let a=[1, 3, 9, 5, 2];
// let b=[3, 2, 5, 7, 8];
// console.log(solution(a, b));
