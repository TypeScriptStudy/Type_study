// 함수 타입 표현식

type Add = (a: number, b: number) => number;

// 함수 타입 표현식(Function Type Expression)
const add1: Add = (a, b) => a + b;


// 여러개의 함수가 동일한 타입을 갖는 경우
// const add = (a: number, b: number) => a + b;
// const sub = (a: number, b: number) => a - b;
// const multiply = (a: number, b: number) => a * b;
// const divide = (a: number, b: number) => a / b;

// 이렇게 사용가능
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니쳐

// type Operation2 = {
//     (a: number, b: number): number;
//   };
  
//   const add2: Operation2 = (a, b) => a + b;
//   const sub2: Operation2 = (a, b) => a - b;
//   const multiply2: Operation2 = (a, b) => a * b;
// const divide2: Operation2 = (a, b) => a / b;


//  함수이자 일반 객체를 의미하는 타입으로 정의 = 하이브리드 타입
type Operation2 = {
    (a: number, b: number): number;
    name: string;
  };
  
  const add2: Operation2 = (a, b) => a + b;
  
  
  add2(1, 2);
  add.name;