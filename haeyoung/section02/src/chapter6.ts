//any
//특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {
};
//함수에서 toUppercase 함수 사용해서 오류남

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

//모든 타입의 변수를 할당 받을 수 있고
//모든 타입의 변수에 any 타입의 값을 집어넣을 수 있다.
//any 타입은 타스를 사용하는 이점이 없음. 런타임시 오류남. 최대한 피해서 사용

//unknown
//넘버
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {
};

// unknownVar.toUpperCase();
// num = unknownVar;
//모든 타입의 변수에 unknown 값을 넣을 수 없음
//연산도 불가능

if (typeof unknownVar === 'number') {
    //타입 정제
    //unkownVar가 number인걸 명시해주면 가능
    num = unknownVar;
}

//any:모든 타입의 값을 다 할당 받을 수 있고 반대로도 모드가능
//unknown:모든 타입의 값을 다 할당 받을 수 있지만 반대로는 불가능
//변수의 저장할 타입이 정확하지 않을때는 unknown을 활용



