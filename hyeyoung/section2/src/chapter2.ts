// 배열
let numArr : number[] = [1,2,3];

let strArr : string[] = ["hello","im","hoing"];

let boolArr : Array<boolean> = [true, false, true]; //제네릭 문법

//배열 요소 타입이 다양할 경우
let multiArr : (string | number)[] = [1, "hello"];  //union타입

//다차원 배열 타입 정의
let doubleArr : number[][] = [
    [1,2,3],
    [4,5]
];

//튜플 
//Ts에서만 제공 : 길이와 타입이 고정
let tup1 : [number, number] = [1,2];
let tup2 : [number, string, boolean] = [1, "2", true];
// 배열 변환되어 사용되기 때문에 하단 명령어 사용 가능
tup1.push(1);
tup1.pop();

const users : [string, number][]= [
    ["user1",1],
    ["user2",2],
    ["user3",3],
    ["user4",4],
   // [5, "user5"] //인덱스 별 타입을 고정시킬때 tuple 유용
]
