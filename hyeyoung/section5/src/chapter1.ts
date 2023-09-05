/**
 * 인터페이스
 */
//타입 별칭과 기본 기능은 같음 but union(|), intersection(&) 불가능
interface Person {
    readonly name : string;  //읽기전용
    age? : number;           //선택적
    sayHi?: () => void;      //화살표 함수 
    sayHi2(): void;         //호출 시그니처
    sayHi2(a:number, b:number): void;  //오버로드 시그니처 (화살표 함수로는 불가)
}

const person : Person = {
    name: "한혜영",
    sayHi2: function (){
        console.log("Hi");
    }
};

person.sayHi2();
person.sayHi2(1, 2);

