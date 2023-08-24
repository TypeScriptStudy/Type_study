/**
 * 인터페이스의 확장
 * - 중복 프로퍼티 정리
 */

interface Animal {  //객체 타입 (type Animal로도 확장 가능)
    name: string;
    color: string;
}

// Dog, Cat, Chicken은 Animal을 확장(상속)하는 타입
interface Dog extends Animal{
    isBark: boolean;
}

const dog: Dog = {
    name: "hello",  //원본의 서브 타입으로 재정의 가능 
    color: "",
    isBark: true,
};

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    name: string;
    age: number;
    isFly: boolean;
}

//다중 확장 
interface DogCat extends Dog, Cat {
}

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
};
