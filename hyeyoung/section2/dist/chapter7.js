//7. void, never 타입 
//1. Void  : 공허 -> 아무것도 없음을 의미   
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
// 반환값 타입 undefined, null 설정시 undefined,null 반환 해야함
let a;
/* strictNullChecks : false 설정시 밑 내용 실행 가능
a = 1;
a = "hello";
a = {};
*/
a = undefined;
//2. never 
//never -> 존재하지 않는 
//불가능한타입, 모순
//정상 종료 되지 않는, 무한루프 
function func3() {
    while (true) { }
}
//실행시 프로그램 종료됨 
function func4() {
    throw new Error();
}
//변수 type으로 never 지정
let b;
export {};
/* strictNullChecks : false 설정해도 어떠한 값도 저장하지 못함
b = 1;
b = "hello";
b = {};
b = undefined;
b = null;
b = anyVar;
*/ 
