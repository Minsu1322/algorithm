function solution(n) {
    var answer = 0;
    const newArr = n.toString();
    const numStr = [...newArr];
    
    for(i=0; i<numStr.length; i++){
        answer += Number(numStr[i]);
    }
    return answer;
}