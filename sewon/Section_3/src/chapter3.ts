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
    name: "sera",
    color: "black",
};

let dog: Dog = {
    name: "아롱이",
    color: "white",
    bread: "말티즈",
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
// 업캐스팅 가능
book = programingBook;
// 다운 캐스팅 불가능


/**
 * 초과 프로퍼티 검사 예제
 */

let book2 : Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    //skill: "reactjs",
}

let book3: Book = programingBook; 



function func(book:Book) {}
func({
     name: '한 입 크기로 잘라먹는 리액트',
     price: 33000, 
     //skill: 'react' 
    });

func(programingBook);