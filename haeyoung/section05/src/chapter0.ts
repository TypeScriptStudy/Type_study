/*
인터페이스 : 상호간에 약속된 규칙
          객체의 구조를 정의하는데 특화된 문법
          (상속,합침 등의 특수한 기능을 제공함)

          인터페이스 사용할때 I를 앞에 붙이는 경우가 있음 ( 헝가리안표기범 / 자바에서는 잘 안씀 )
          자바에서는 파스칼,카넬,스네이크를 사용하는데 interface하나를 위해 헝가리안 표기법을 써야하냐..
*/
interface Person {
    readonly name : string;
    age? : number;
    sayHi(): void;
    //호출 시그니처 ():void 만 정의하면 const person 타입 자체가 함수 타입이 됨
    sayHi(a:number,b:number): void;
    //오버로드 시그니처 두개

    //sayHi: () => void;
    //sayHi: (a:number,b:number) => void;
    //함수 타입 표현식으로하면 오버로드 시그니처를 못알아 먹음
    //메소드의 오버로드를 구현할때는 호출 시그니처 사용
}


const person:Person = {
    name:"임해영",
    sayHi : function (){
        console.log("hi");
    }
}

// person.name = "홍길동"; //에러 readonly 때문
person.sayHi();
person.sayHi(1,2);
//인수 안받고,두개 받는 버전으로 만드려면 호출 시그니처 사용




//타입 별칭은 유니온타입,인터섹션 타입 만들 수 있지만 인터페이스는 불가능
type Type1 = number | string;
type Type2 = number & string;

//인터페이스로 만든 Person 객체 타입을 유니온이나 인터섹션에 이용해야할때
type Type3 = number | string | Person;
type Type4 = number & string & Person;

const person2:Person | number = {
    name:"임해영",
    sayHi : function (){
        console.log("hi");
    }
}