/*
함수 타입 호환성
:특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
1.반환값의 타입이 호환되는가
2.매개변수의 타입이 호환되는가
*/

//기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

a = b;
//b = a;//number 리터럴 <- number 다운 캐스팅

//기준2. 매개변수가 호환되는가
//2-1. 매개변수의 개수가 같을 떼
type C = (value:number) => void;
type D = (value:10) => void;

let c:C = (value) => {};
let d:D = (value) => {};

//c = d;
// 업캐스팅인데 안되는 이유 : 반환값 타입을 기준으로 호환성을 판단할때완 다르게 매개변수의 타입을 기준으로 호환성을 판달할때는 업캐스팅이 안됨
d = c;
//매개변수의 타입을 기준으로 호환성을 판달할때는 다운캐스팅 됨


type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name)
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name)
    console.log(dog.color)
};

// animalFunc = dogFunc;
//animalFunc의 매개변수 타입은 animal
//dogFunc의 매개변수 타입은 dog
//animal이 슈퍼타입
//업캐스팅 상황

let testFunc = (animal:Animal) => {
    console.log(animal.name)
    // console.log(animal.color)// 에러
}


//업캐스팅 상황 위 아래 같은 코드
dogFunc = animalFunc;
let testFunc2 = (dog:Dog) => {
    console.log(dog.name)
}

//2-2 매개변수의 개수가 다를 때 && 타입이 같은 매개변수가 있어야함
//할당하려고 하는 함수의 타입의 매개변수의 개수가 더 적어야 호환이 가능
type Func1 = (a:number,b:number) => void;
type Func2 = (a:number) => void;

let func1 : Func1 = (a,b) => {};
let func2 : Func2 = (a) => {};

func1 = func2;
//할당하려고 하는 함수의 타입의 매개변수의 개수가 더 적어야 호환이 가능
// func2 = func1;//에러
