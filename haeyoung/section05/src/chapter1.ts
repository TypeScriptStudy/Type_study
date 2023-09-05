/*
인터페이스의 확장
-중복된 프로퍼티 extend로 상속받기
age를 → color로 바꾸라는 요구사항이 생긴다면 서브타입의 프로퍼티까지 다 변경해야됨
-number로 정의된 프로퍼티를 number리터럴 타입으로 재정의 할 수 있지만 아예 다른타입을 불가능
-Dog는 Animal의 서브 타입
-따라서 프로퍼티 재정의 할때도 상속받은 프로퍼티의 서브 타입으로만 변경 가능
-인터페이스는 객체 타입이면 다 확장 할 수 있음

*/

/*
-이것도 가능
-인터페이스는 객체 타입이면 다 확장 할 수 있음
type Animal {
    name:string;
    color:"",
}
*/

interface Animal {
    name:string;
    color:"",
}

interface Dog extends Animal{
    isBark: boolean;
}

const dog:Dog = {
    name:"",
    color:"",
    isBark: true,
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}


//다중확장
interface DogCat extends Dog,Cat{}

const dogCat : DogCat = {
    name:"",
    color:"",
    isBark:true,
    isScratch:true
}
