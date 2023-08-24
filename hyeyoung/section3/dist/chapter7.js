/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */
// value => number : toFixed
// value => string : toUpperCase
function func(value) {
    value; //union타입 
    //value.toFixed(); 사용 불가
    //조건문 내부에서 타입 보장됨
    if (typeof value === 'number') { //타입 가드 
        console.log(value.toFixed());
    }
    else if (typeof value === 'string') { //타입 가드 
        console.log(value.toUpperCase());
    }
}
/**
 * 타입 가드 Example
 * value => Date : getTitle
 * instanceof 연산자
 */
function func2(value) {
    //null에 typeof 실행시 object 반환
    //Date, null 둘 다 통과함  => instanceof 사용
    //if(typeof value === 'object'){ 
    //     console.log(value.getTime());
    // }
    if (value instanceof Date) {
        console.log(value.getTime());
    }
}
function func3(value) {
    if (value && "age" in value) { //value가 있을시에만 검사
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
export {};
