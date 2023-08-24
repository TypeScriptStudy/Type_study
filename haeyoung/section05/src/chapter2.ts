/*
선언 합침
-인터페이스는 별칭과 달리 동일한 이름으로 두개 인터페이스를 선언해도 문제가 안됨
-why? 동일한 이름으로 정의한 인터페이스들은 결국 다 합쳐짐
-동일한 프로퍼티를 중복 정의할때
ㄴ다른 타입으로 정의 하면 충돌
ㄴ서브타입으로 정의해도 안됨 반드시 동일한 타입으로 정의
-간단한 프로그래밍 할때는 잘 사용 X 라이브러리의 타입 정의가 좀 부실할때 추가,정확하게 만들어주는 모듈 보강때
*/

/*
오류
type Person = {
    name: string;
}

type Person = {
    name: number;
}
*/

//인터페이스는 별칭과 달리 동일한 이름으로 두개 인터페이스를 선언해도 문제가 안됨
//why? 동일한 이름으로 정의한 인터페이스들은 결국 다 합쳐짐
interface Person {
    name: string;
}

interface Person {
/*
    name: number,
    -동일한 프로퍼티를 중복 정의하는데 다른 타입으로 정의 하면 충돌
*/
    age: number;
}

const person: Person ={
    name:"",
    age:27,
}



/*
모듈보강
*/

//라이브러리
interface Lib {
    a:number;
    b:number;
}


//c를 추가 하고 싶을때
const lib = {
    a: 1,
    b: 2,
    c:"hi",
}

//interface 선언 합침
interface Lib {
    c:string
}