function solution(n) {
    var answer = parseInt([...String(n)].sort().reverse().join(''));
    return answer;
}