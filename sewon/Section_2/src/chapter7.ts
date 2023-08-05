// void : 아무것도 없다
// void 타입은 아무런 값도 없음을 의미하는 타입입니다.
// 보통은 다음과 같이 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용


function func2(): void {
    console.log("hello");
}


let a: void;
a = undefined;
// "strictNullChecks: false" 일 경우
// let a: void;
// a = undefined;
// a = null;

// void를 사용해야하는 이유!
// undefined으로 설정하면 함수가 진짜 undefined 을 반환해야 합니다. null도 마찬가지!
//  return문 자체가 없는 함수의 반환값 타입을 정의해야 할 때에는 다음과 같이 void 타입을 이용해야 합니다.



// naver

// 불가능 한 값의 타입을 정의할 때 never 타입을 사용
function func3(): never {
    while (true) {}
}

// 변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없게 됩니다. 
let anyVar: any;

// let a: never;
// a = 1;
// a = null;
// a = undefined;
// a = anyVar;

// example

function func4(): never {
    throw new Error();
  }