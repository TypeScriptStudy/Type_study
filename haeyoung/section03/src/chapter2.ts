//unknown(전체집합)

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    //다운 캐스팅
    let unknownVar: unknown;
    // let num: number = unkownVar;//에러
    // let str: string = unkownVar;//에러
    // let bool: boolean = unkownVar;//에러


}

//never 타입 ( 공집합 부분 )

function neverExam() {
    function neverFunc():never {
        while(true) {}

    }

    //업캐스팅
    let num:number = neverFunc();
    let str:string = neverFunc();
    let bool:boolean = neverFunc();

    //다운캐스팅
    // let never1:never = 10;//에러
    // let never2:never = "hello";//에러
    // let never3:never = true;//에러
}


//void 타입

function voidExam() {
    function voidFunc():void {
        console.log("hi");
        return undefined;
        //void 타입은 undefined타입의 슈퍼타입
    }

    let voidVar: void = undefined;
    //위에 코드랑 같은 코드
}

//any
//모든 타입의 슈퍼타입이 되기도 하고 서브타입이 되기도 함
function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar:undefined;
    let naverVar:never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // neverVar = anyVar;//에러
    //순수 공집합이기 때문에 never타입의 변수에서는 어떤것도 다운캐스팅 할 수 없다
}