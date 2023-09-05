/**
 * 함수 타입 정의
 */

//어떤 [타입의] 매개변수 받고, 어떤 [타입의] 결과값 반환하는지 이야기
function func(a:number, b:number){
	return a+b; //타입 추론: number 
}


//화살표 함수 타입 정의
const add = (a:number, b:number)=> a + b;


//함수 매개변수 정의
// 주의)선택적 매개변수가 필수 매개변수 앞에 있을 경우 오류
function introduce(name = "한혜영", tall?:number){ //타입추론: string
	console.log(`name : ${name}`);
	
  //tall == undefined 일경우 연산 불가! -> 타입 가드 사용!
	if(typeof tall === "number"){
		console.log(`tall : ${tall + 10}`);
	}
}

//introduce(1); // 타입 오류!
introduce("한혜영"); // ?: 선택적 매개변수로 정상 출력


//나머지 매개변수
function getSum(...rest : number[]){ //rest 매개변수는 마지막에 작성
    // : [number, number, number] 개수 제한 작성 가능
let sum = 0;
rest.forEach((it) => (sum += it));

return sum;
}

getSum(1, 2, 3);        // [1, 2, 3]
getSum(1, 2, 3, 4, 5);  //[1, 2, 3, 4, 5]