function solution(n) {
    var answer = [n];
    var result = answer[0].toString().split("").map(Number);
    result.reverse()
    return result;
}