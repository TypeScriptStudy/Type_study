/**
 * 인터페이스 합치기 (선언 합침)
 * - 라이브러리 타입 정의가 부실한 경우 보강해줄 때 사용
 * - 프로퍼티 타입 재정의
 *      - 확장: 원본의 서브타입으로만
 *      - 합침: 원본과 같은 타입으로만
 */

//동일 이름으로 선언한 인터페이스의 property는 모두 합쳐짐
interface Person {
    name: string;
}

interface Person {
    //name: number; 타입 재정의시 충돌!
    age: number;
}

interface Developer extends Person{
    name: "hello"; //확장시 서브 타입으로 재정의 가능
}

const person:Person = {
    name : "",
    age: 25,
}

/**
 * 모듈 보강 
 */
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c:string;  //
}

const lib = {
    a: 1,
    b: 2,
    c: "hello"  //개발자 임의 객체 추가 불가 -> interface 사용
}
