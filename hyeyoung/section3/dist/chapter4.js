/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */
/**
 * 1. 합집합 - Union 타입
 */
let a;
a = 1;
a = "1";
a = true;
let arr = [1, "hello", true];
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
// let union4: Union1 = {  //오류 발생
//     name:"",
// }
/**
 * 2. 교집합 타입 - intersection 타입
 */
let variable; //never 타입 (공집합)
let intersection = {
    name: "",
    color: "",
    language: "",
};
export {};
