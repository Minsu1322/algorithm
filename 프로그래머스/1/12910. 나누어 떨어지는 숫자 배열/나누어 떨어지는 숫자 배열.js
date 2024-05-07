function solution(arr, divisor) {
    var answer = [];
    var divisible = false;
    
    arr.forEach((i) => {
        if (i % divisor === 0) {
            answer.push(i);
            divisible = true; 
        }
    });
    if (!divisible) {
        answer.push(-1);
    }
    
    return answer.sort((a, b) => a - b);
}