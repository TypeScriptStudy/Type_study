/*
사용자 정의 타입가드
* */

type Dog = {
    name:string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;


function isDog(animal:Animal) :animal is Dog{
    return (animal as Dog).isBark !== undefined
}
//타스는 우리가 직접 만든 반환값을 가지고 타입을 좁혀주지 않음
//:animal is Dog : 만약 이 함수가 true를 리턴하면 애니멀은 Dog 타입이다
//isDog의 반환값의 타입이 animal is Dog로 되어 있으면 함수가 true면 인수로 전달한 animal 값이 dog 타입이겠구나

function isScratch(animal:Animal) :animal is Cat{
    return (animal as Cat).isScratch !== undefined
}


function warning(animal: Animal){
    if (isDog(animal)){
        animal;
    }else if("isScratch" in animal){
        //프로퍼티 이름으로 타입을 좁히면 직관적으로 안좋고 프로퍼티 이름이 변경 되면 타입이 이상하게 추론됨
    }
}