// object 가 아닌 구조 기준으로 타입 정의
// => 구조적 타입 시스템  -> property based TS
// <-x-> 명목적 타입 시스템
let user : {
    id? : number;  // ? : 선택적 property
    name : string;
} = {
    id : 1,
    name : "hoing",
};

let dog : {
    name : string,
    color :string,
    age : number
} = {
    name : "별달이",
    color : "black",
    age : 8
}
//user : object사용시 user.id 사용불가
// => 객체 리터럴 타입 사용
user.id;

//readonly : property 값 변경 불가
let config : {
    readonly apiKey : string
} = {
    apiKey : "125467"
}
//config.apiKey = "변경불가"









