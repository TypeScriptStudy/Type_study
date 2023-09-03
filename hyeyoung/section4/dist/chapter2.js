/**
 * 함수 타입의 호환성
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단
 *   1. 반환값 타입이 호환되는가
 *   2. 매개변수 타입이 호환되는가
 */
let a = () => 10;
let b = () => 10;
a = b; // 정상
let c = (value) => { };
let d = (value) => { };
//c = d;   //오류!   number <--- number리터럴 타입 (업캐스팅)  
d = c;
let animalFunc = (animal) => { };
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
//animalFunc = dogFunc; // 오류!  Animal  <--- Dog (업캐스팅)
dogFunc = animalFunc;
let testFunc = (animal) => {
    console.log(animal.name);
    //	console.log(animal.color);  //오류! color 미존재
};
let testFunc2 = (dog) => {
    console.log(dog.name);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
export {};
//func2 = func1; //오류!   1개  <--- 2개 (업캐스팅)
