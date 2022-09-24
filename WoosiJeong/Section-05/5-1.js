// 1. 두 배열 합치기(Two Pointers Algorithm)
// sort 함수가 호출되기만 해도 n개를 정렬하면 nlogn 시간 복잡도가 호출된다. -> n x logn처럼 곱하기가 들어가면 시간복잡도가 커진다.
// 여기서는 Two Pointers Algorithm을 사용한다.
// 두개의 포인터 변수를 잡았다고 해서 Two Pointers Algorithm이라고 한다.
// Two Pointers Algorithm은 두 개의 포인터 변수를 가지고 각각의 배열을 탐색 -> O(n+m)

function solution(arr1, arr2){
    let result = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;                                        // p1과 p2를 잡아서 0으로 초기화 한다.

    while(p1 < n && p2 < m) {                               // n과 m 둘다 0보다 작아야 한다. 만약에 둘 중 하나라도 n 또는 m과 같으면 바로 해당 반복문은 끝난다
        if(arr1[p1] <= arr2[p2]) result.push(arr1[p1++]);   // 만약에 arr1[p1]이 작거나 같으면 arr1[p1]을 푸시하고 1증가
        else result.push(arr2[p2++]);                       // 아니면 arr2[p2]를 푸시하고 1증가
    }
                                                            // 첫 번째 반복문이 끝나고 아직 남아있는 배열들을 탐색한다.
    while(p1 < n) result.push(arr1[p1++]);                  // n 배열이 안 끝났으면 해당 반복문 실행
    while(p2 < m) result.push(arr2[p2++]);                  // 반대로 m 배열이 안 끝났으면 해당 반복문 실행
    return result;                                          // result를 리턴
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));

























// function solution(arr1, arr2){
//     let answer=[];
//     let n=arr1.length;
//     let m=arr2.length;
//     let p1=p2=0;
//     while(p1<n && p2<m){ // 둘 중에 하나가 다 탐색이 되어서 끝나면 해당 반복문이 종료된다.
//         if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]); // p1이 만약에 5이면 arr1에 5를 넣고 p1은 6으로 증가된다.
//         else answer.push(arr2[p2++]);
//     }
//     while(p1<n) answer.push(arr1[p1++]);
//     while(p2<m) answer.push(arr2[p2++]); 
//     return answer;
// }

// let a=[1, 3, 5];
// let b=[2, 3, 6, 7, 9];
// console.log(solution(a, b));