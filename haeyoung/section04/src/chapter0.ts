/*
함수 타입 정의
*/

/*
함수를 설명하는 가장 좋은 방법
자스 : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
타스 : 어떤 [타입] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
*/
function func(a:number,b:number) {
    return a + b;
}

/*
화살표 함수의 타입을 정의하는 방법
*/
const add = (a: number,b: number) => a + b ;

/*
함수의 매개변수
*/
function introduce(name = "임해영" , tall?:number) {
    //tall?:number ->선택적 프로퍼티
    //선택적 매개변수는 항상 뒤에
    console.log(`name : ${name}`)
    console.log(`tall : ${tall}`)
    if (typeof tall === "number") {
        //타입 가드를 생성해 타입 좁히기
        console.log(`tall : ${tall + 10}`)
        //그냥 사용하면 에러 undefined 일 수 있음
    }

}
introduce("임해영",160);
introduce("임해영");


function getSum(...rest:[number,number,number]){
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1,2,3)
// getSum(1,2,3,4,5)

