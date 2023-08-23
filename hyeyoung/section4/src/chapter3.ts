/**
 * 함수 오버로딩
 * 하나의 함수 func, 모든 매개변수 타입 number
 * 매개변수 1 : 매개변수 * 20
 * 매개변수 3 : 매개변수 다 더한 값
*/ 
//오버로드 시그니쳐
function func(a:number): void;
function func(a:number, b:number, c:number): void;

//구현 시그니처
function func(a: number, b?:number, c?:number) {
	if(typeof b === "number" && typeof c === "number") {
		console.log(a + b + c);
	} else {
		console.log(a * 20);
	}
}

//func();  //오류!
func(1);
//func(1,2);  //오류!
func(1,2,3);

