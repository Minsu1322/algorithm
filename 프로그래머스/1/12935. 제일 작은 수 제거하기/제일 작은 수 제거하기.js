function solution(arr) {
    var answer = [];
    answer = arr.filter((e) => e != Math.min(...arr))
    

    return answer;
}