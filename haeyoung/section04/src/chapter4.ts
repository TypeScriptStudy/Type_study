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


//isDog의 반환값의 타입이 animal is Dog로 되어 있으면 함수가 true면 인수로 전달한 animal 값이 dog 타입이겠구나
function isDog(animal:Animal) :animal is Dog{
    return (animal as Dog).isBark !== undefined
}

function isScratch(animal:Animal) :animal is Cat{
    return (animal as Cat).isScratch !== undefined
}


function warning(animal: Animal){
    if (isDog(animal)){
        animal;
    }else if("isScratch" in animal){

    }
}