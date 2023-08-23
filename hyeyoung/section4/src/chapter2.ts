/**
 * 함수 타입의 호환성
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단
 *   1. 반환값 타입이 호환되는가
 *   2. 매개변수 타입이 호환되는가
 */

//1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;  //number 리터럴 타입 10 

let a:A = () => 10;
let b:B = () => 10;

a = b; // 정상
//b = a; // 오류!   number리터럴타입 <--- number  (다운 캐스팅!)



//2. 매개변수 타입이 호환되는가
//2-1. 매개변수의 개수가 같을때
//매개변수로 호환성 판단시 업캐스팅일 때 오류!
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//c = d;   //오류!   number <--- number리터럴 타입 (업캐스팅)  
d = c;

type Animal = {
	name: string;
};

type Dog = {
	name: string;
	color: string;
};

let animalFunc = (animal: Animal) => {};
let dogFunc = (dog: Dog) => {
	console.log(dog.name);
	console.log(dog.color);
};

//animalFunc = dogFunc; // 오류!  Animal  <--- Dog (업캐스팅)
dogFunc = animalFunc;

let testFunc = (animal:Animal)=>{
	console.log(animal.name);
//	console.log(animal.color);  //오류! color 미존재
}

let testFunc2 = (dog:Dog)=>{
	console.log(dog.name);
}

//2-2. 매개변수의 타입이 같고, 개수가 다를때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1:Func1 = (a, b) => {};
let func2:Func2 = (a) => {};

func1 = func2; 
//func2 = func1; //오류!   1개  <--- 2개 (업캐스팅)