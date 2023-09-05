/**
 * Unknown 타입
 *  - Super Type
 *  - 모든 타입은 unknown타입으로 업캐스팅 가능
 */
function unknownExam() {
    //모든 Up Casting 가능
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    //모든 down Casting 불가
    let unknownVar;
    //let num: number = unknownVar;
}
/**
 * Never 타입
 *  - 모든 집합의 부분 집합: 공집합
 *  - never 타입은 모든 타입으로 업캐스팅 가능
 */
function neverExam() {
    function neverFunc() {
        while (true) { } //함수가 반환하는 값이 공집합임
    }
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
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
    function voidFunc() {
        console.log("hi");
    }
    let voidVar = undefined; //업캐스팅
}
/**
 * any 타입
 *
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    //any <- unknown 다운캐스팅 가능
    //undefined <- any 다운캐스팅 가능
    anyVar = unknownVar;
    undefinedVar = anyVar;
    //never(공집합) <- any 다운캐스팅 불가능
    //neverVar = anyVar;
}
export {};
