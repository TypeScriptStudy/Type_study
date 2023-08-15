/**
 * 기본 타입간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; //업캐스팅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */
//구조적 타입 시스템
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    bread: string; //추가 property
};

let animal : Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "달별이",
    color: "gray",
    bread: "요크셔",
};
//업캐스팅 가능
animal = dog;
//다운캐스팅 불가
// dog = animal;


type Book = {
    name: string;
    price: number;
};

type ProgramingBook = {
    name: string;
    price: number;
    skill: string;
};

let book : Book;
let programingBook : ProgramingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "react",
}
//업캐스팅 가능
book = programingBook;
//다운 캐스팅 불가능
// programingBook = book;

/**
 * 초과 프로퍼티 검사 예제
 */
//Ex1. 업캐스팅 후 초기화 불가능
let book2 : Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    //skill: "reactjs",
}
//해결법) 초기화시 객체 리터럴 사용X
let book3: Book = programingBook; //{ name: '한 입 크기로 잘라먹는 리액트', price: 33000, skill: 'react' }


//Ex2.함수 호출후 객체 리터럴 전송시 오류!
function func(book:Book) {}
func({
     name: '한 입 크기로 잘라먹는 리액트',
     price: 33000, 
     //skill: 'react' 
    });
//해결법) 인수로 변수 전달해야함
func(programingBook);