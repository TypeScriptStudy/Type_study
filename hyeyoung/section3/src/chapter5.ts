/**
 * 5. 타입 추론
 * - 점진적 타입 시스템 : 변수 타입 자동 추론
 * - let 으로 선언시 타입 넖히기 사용됨
 */
//1. 변수 타입 추론 (기준:초기값)
let a = 10;      //number
let b = "hello"; //string
let c = {
    id: 1,
    name: "호잉",
    profile: {
        nickname: "hoing",
    }
};
//2. 구조분해 할당시 추론 (기준:초기값)
let {id, name, profile} = c; 
let [one, two, three] = [1, 'hello', true];

//3. 함수 타입 추론 (기준:반환값)
function func(message = "hello") {
    return "hello"; //string
}

//4. 초기값 생략 -> any 타입의 진화  (추천X)
let d;              //any
d = 10;             //any -> number
d.toFixed();        //number
d = "hello";        //any -> string
d.toUpperCase();    //string

//5. const 변수 -> 리터럴 타입으로 추론 (변경 불가)
const num = 10;     //넘버 리터럴 10 타입
const str = "hello" //stirng 리터럴 hello 타입   

//6. 배열 union 타입
const arr = [1, "string"];  //union타입

