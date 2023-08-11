/**
 * Unknown 타입
 *  - Super Type
 *  - 모든 타입은 unknown타입으로 업캐스팅 가능
 */
function unknownExam() {
    //모든 Up Casting 가능
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    //모든 down Casting 불가
    let unknownVar: unknown;
   //let num: number = unknownVar;
}

/**
 * Never 타입 
 *  - 모든 집합의 부분 집합: 공집합
 *  - never 타입은 모든 타입으로 업캐스팅 가능
 */
function neverExam(){
    function neverFunc(): never {
        while (true) {} //함수가 반환하는 값이 공집합임
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
 
    //다운캐스팅 오류
    // let never1: never = 10;
    // let never2: never = 'string';
    // let never3: never = true;
     
}

/**
 * Void 타입
 *  - 반환값이 없을때 
 *  - undefined의 super 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined; //업캐스팅
}


/**
 * any 타입
 * 
 */

function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    //any <- unknown 다운캐스팅 가능
    //undefined <- any 다운캐스팅 가능
    anyVar = unknownVar;
    undefinedVar = anyVar;

    //never(공집합) <- any 다운캐스팅 불가능
    //neverVar = anyVar;
}
 