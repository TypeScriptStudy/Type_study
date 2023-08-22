/*
함수 타입 표현식
*/

type Operation = (a:number, b:number) => number;
//(a:number, b:number)
//매개변수 타입을 정의하는곳
//=> number;
//반환값을 정의하는 곳

const add:(a:number, b:number) => number = (a,b) => a + b;
//함수의 타입을 표현식으로 정의 할땐 매개변수 개수와 타입을 맞춰줘야함
const sub:Operation = (a , b) => a - b;
const multiply:Operation = (a , b) => a * b;
const divide:Operation = (a , b) => a / b;



/*
호출 시그니처 ( 콜 시그니처 )
:함수의 타입을 정의하는 문법
*/
type Operation2 = {
    (a:number, b:number):number;
}


const add2:Operation2 = (a,b) => a + b;
//함수의 타입을 표현식으로 정의 할땐 매개변수 개수와 타입을 맞춰줘야함
const sub2:Operation2 = (a , b) => a - b;
const multiply2:Operation2 = (a , b) => a * b;
const divide2:Operation2 = (a , b) => a / b;


