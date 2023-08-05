// 배열
let numArr: number[] = [1, 2, 3]

let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법
let boolArr2: boolean[] = [true, false, true];

let multiArr: (string | number )[] = [1, "hello"]; // 순서는 상관노? 

// 튜플 (길이와 타입이 고정된 배열)

let tup1: [number, number] = [1, 2];
let tup2: [string, number] = ["ㅎㅇ", 2];

// 사용 주의
// tup1.push(1);
// tup1.push(1);
// tup1.pop()
// tup1.pop();

// 튜플을 왜 쓰는걸까?
const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "조아무개"], // 오류 발생
  ];
  
// 값이 정해져 있고, 순서 룰이 중요할때 값을 잘못넣지 않도록 방지


// 다차원 배지
let doubleArr : number[][] = [
    [1, 2, 3], 
    [4, 5],
  ]

