// 함수 타입의 호환성 = 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단

// 다음 2가지 기준으로 함수 타입의 호환성을 판단
// 두 함수의 반환값 타입이 호환되는가?
// 두 함수의 매개변수의 타입이 호환되는가?


// 반환값 호환
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; // ❌


// 매개변수의 타입이 호환

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // ❌
d = c; // ✅


// 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌