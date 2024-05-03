function solution(x) {
    var answer = true;
    let num = 0;
    
    for(i=0; i<String(x).length; i++){
        num += parseInt(String(x)[i])
    }
    
    answer = x%num == 0 ? answer : !answer
    return answer
}


//각 자릿수의 합구하기
//x값 나눠지는경우만 구하기