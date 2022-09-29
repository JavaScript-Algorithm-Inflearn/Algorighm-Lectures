// 8. 회의실 배정 (그리디 문제)
// 그리디 알고리즘(욕심쟁이 알고리즘, Greedy Algorithm)이란 "매 선택에서 지금 이 순간 당장 최적인 답을 선택하여 적합한 결과를 도출하자"라는 모토를 가지는 알고리즘 설계 기법이다.
// 무작정 적용하는 것이 아니라 과연 해당 문제에 적합한 알고리즘인지 먼저 생각을 해야한다.

function solution(meeting) {
    let counting = 0;                         // 카운팅이니까 0으로 한다.
    meeting.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0]; // a, b의 끝나는 시간이 같으면 a, b의 시작 시간으로 정렬
        else return a[1] - b[1];              // 끝나는 시간이 다를 경우 끝나는 시간을 기준으로 정렬
    })
    let endTime = 0;                          // 끝나는 시간을 0으로 지정해준다.
    for(let x of meeting) {                   // for of문으로 정렬된 거 탐색
        if(x[0]>=endTime) {                   // x의 시작시간이 endTime보다 크면
            counting++;                       // 카운팅을 1을 올린다.
            endTime = x[1]                    // endTime은 해당 시간의 끝나는 시간으로 바꿔준다.
        }                                                     
    }                     
    return counting;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));