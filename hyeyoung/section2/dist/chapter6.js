//1. any 
//특정 변수의 타입을 확실히 모를때 사용
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase(); //실행시 오류 발생
anyVar.toFixed();
let num = 10;
num = anyVar;
//any 타입은 타입 검사를 안하는 것과 똑같음 -> ts 왜씀?!
//2. unknown 
//runtime 에러 일으키는 any보다 굿!
let unknownVar;
unknownVar = 1;
unknownVar = "";
unknownVar = () => { };
// unknownVar.toUpperCase()
// num = unknownVar;
// 연산 불가! 타입 정제 후 사용 가능
if (typeof unknownVar === "number") { //타입 정제
    num = unknownVar;
}
export {};
