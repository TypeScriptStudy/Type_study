// void
//void -> 공허 -> 아무것도 없다.
//void -> 아무것도 없음을 의미하는 타입

function func1():string {
    return " hello";
}

function func2():void {
    //return값을 반환하고 싶지 않을때
    console.log("읎다");
    //타입을 undefined , null 을 넣으면 return 을 꼭 해줘야해서 void
}

// let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = undefined;
//오직 undefined만 담을 수 있음
// a = null;
//에러 but strictureNullChecks: false하면 가능 ( null 이 어느타입에도 들어갈 수 있게 설정 하는것 )


//never
//never -> 존재하지 않는
//불가능한 타입

function func3():never {
    //never
    //무한루프로 반환 되는 값이 있는것 자체가 모순
    while (true) {}
}

function func4():never {
    throw new Error();
}


// let anyVar: any;
// let a: never;

// a = 1;
// a = "hello";
// a = {};
// a = undefined;
// a = null;
// a = anyVar;
//다 에러 strictureNullChecks: false해도 불가
//어느값도 저장할 수 없고 어느값도 저장하는게 말도안되는 변수의 타입을 정의할때 사용