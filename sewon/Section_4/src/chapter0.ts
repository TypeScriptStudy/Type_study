// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명

// function func(a: number, b: number): number {
//     return a + b;
//   }

// 함수의 반환값 타입은 자동으로 추론되기 때문에 다음과 같이 생략가능
function func(a: number, b: number) {
    return a + b;
}
  
//화살표 함수 타입 정의
// const add = (a: number, b: number): number => a + b;

// 함수의 반환값 타입은 자동으로 추론
const add = (a: number, b: number) => a + b;


// 매개변수 기본값 설정
function introduce(name = "이정환") {
	console.log(`name : ${name}`);
}


// 선택적 매개변수 설정 
// 매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략이 가능
function introduce2(name = "이정환", tall?: number) {
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`);
  }
  
  introduce2("이정환", 156);
  
introduce2("이정환");
  

// 위 코드의 tall 같은 선택적 매개변수의 타입은 자동으로 undefined와 유니온 된 타입으로 추론.
// tall의 타입은 현재 number | undefined 이기 때문에 타입 좁히기가 필요

function introduce3(name = "이정환", tall?: number) {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
      console.log(`tall : ${tall + 10}`);
    }
  }