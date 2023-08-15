/**
 * 대수 타입 
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean;
a = 1;
a = "1";
a = true;

let arr : (number | string | boolean)[]= [1, "hello", true];

//객체타입 union
type Dog = {
    name : string;
    color: string;
}

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person 
let union1 : Union1 = { 
    name:"",
    color:"",
};

let union2: Union1 = { 
    name: "",
    language:"",
};

let union3: Union1 = { 
    name:"",
    color:"",
    language:"",
};

// let union4: Union1 = {  //오류 발생
//     name:"",
// }

/**
 * 2. 교집합 타입 - intersection 타입
 */
let variable: number & string; //never 타입 (공집합)

type Intersection = Dog & Person;
let intersection : Intersection = {
    name: "",
    color:"",
    language:"",
}