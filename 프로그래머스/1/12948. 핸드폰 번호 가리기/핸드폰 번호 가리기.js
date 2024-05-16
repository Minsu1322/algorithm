function solution(phone_number) {
    var answer = phone_number.split("");
    answer.fill("*", 0, phone_number.length - 4);
    answer = answer.join("")
    return answer;
}