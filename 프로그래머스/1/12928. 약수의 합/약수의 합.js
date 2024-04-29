function solution(n) {
    let sum = 0;
    let set = new Set();
    
    for(i=1; i<=n; i++){
        if(n%i == 0){
            set.add(i)
            if(n/i != i){
                set.add(n/i)
            }
        }
    }
    
     for(let index of set){
        sum += index;
    }
    return sum;
}