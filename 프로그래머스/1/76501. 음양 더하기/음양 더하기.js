function solution(abs, signs) {
    var answer = 0;
    
    for(i=0; i<signs.length; i++){
        if(signs[i] == false){
            abs[i] = abs[i] * -1
        }
        answer += abs[i]
    }
    
    return answer;
}