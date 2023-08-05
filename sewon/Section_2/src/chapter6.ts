// any
// 특정 변수의 타입을 우리가 확실히 모를때

// 치트키
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

//  any 타입은 타입 검사를 받지 않는 타입이므로 모든 타입스크립트의 문법과 규칙으로부터 자유롭지만 그만큼 위험한 타입



// unknown

// unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장
let num: number = 10;

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 오류 !