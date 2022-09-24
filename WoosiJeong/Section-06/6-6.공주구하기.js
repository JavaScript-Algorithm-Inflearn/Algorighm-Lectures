let n = 8;
let k = 3;
console.log(solution(n,k));

function solution(n, k) {
  	// 왕자 배열 만들기
    const arr = [...Array(n)].map((_, i) => i+1);
    // 왕자가 한 명만 남을 때까지
  	while (arr.length > 1) {
      	// 배열의 0부터 k-1까지 원소들을 배열의 뒤로 옮기기
        const sp = arr.splice(0, k-1);
        arr.push(...sp);
      	// k를 외친 왕자를 제외
        arr.shift();
    }
  	// 마지막 남은 왕자 출력
    return arr[0];
}
