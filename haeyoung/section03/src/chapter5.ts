/*

타입 추론
let a = 10; 해도 타입스크립트가 알아서 타입을 number로 정의함

*/

let a = 10;
let b = "hello";
let c = {
    id:1,
    name:"해영",
    profile:{
        nickname: "haey",
    },
    urls: ["https://www.naver.com"],
};

let {id,name,profile} = c;

let [one,two,three] = [1,"hello",true];

/*

함수는 반환문 기준으로 타입 추론

*/
function func(message = "hello") {
    return "hello";
}

/*

any 타입의 진화
-타입을 지정하지 않으면 any 타입이 되는데 이걸 암묵적 any 타입이라함
-any -> number -> string
-타입이 계속 진화

*/

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

/*
const - 리터럴 타입으로 추론(10,"hello"...)
let - 범용적 타입으로 추론(number,string...)
*/

const num = 10;
const str = "hello";


/*
여러가지 타입의 요소를 저장하는 배열이면 유니온 타입
*/

let arr = [1,"string"];

