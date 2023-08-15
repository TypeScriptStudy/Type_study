//객체타입간의 호환성
//-> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
     name: string;
     color: string;
};
//추가 프로퍼티가 없는 조건이 덜한 타입이 슈퍼 타입

type Dog = {
    name: string;
    color: string;
    breed: string;
};
//도구 타입의 객체가 되려면 bread의 프로퍼티까지 가지고 있어야한다.

let animal : Animal = {
    name : "기린",
    color: "yellow",
};

let dog : Dog = {
    name : "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog;

// dog = animal;

//타입스크립트는 프로퍼티를 기준으로 타입을 정의하는 구조적 타입 시스템
//

//슈퍼
type Book = {
    name: string;
    price: number;
    skill: string;
};

//서브
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book : Book;
let programingBook: ProgrammingBook = {
    name: " 한 입 어쩌구 ",
    price: 33000,
    skill: "reactjs",
}

book = programingBook;
// programingBook = book;



//초과 프로터피 검사
let book2 : Book = {
    name: " 한 입 어쩌구 ",
    price: 33000,
    skill: "reactjs",
}