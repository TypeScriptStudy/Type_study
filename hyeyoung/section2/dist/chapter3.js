// object 가 아닌 구조 기준으로 타입 정의
// => 구조적 타입 시스템  -> property based TS
// <-x-> 명목적 타입 시스템
//객체 리터럴 타입 사용
let user = {
    id: 1,
    name: "hoing",
};
let dog = {
    name: "별달이",
    color: "black",
    age: 8
};
user.id;
//readonly : property 값 변경 불가
let config = {
    apiKey: "125467"
};
export {};
//config.apiKey = "변경불가"
