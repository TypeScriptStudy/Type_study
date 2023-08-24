//Ex 1) 빈 객체로 초기화 후 추후 값 할당하려 할 때
let person = {}; //Person 타입으로 간주하라! 
person.name = "호잉";
person.age = 25;
let dog = {
    name: "별달이",
    color: "gray",
    bread: "요크셔", //초과 property 검사 
};
/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10; //A <- B(모든서브) a가 b의 슈퍼타입
let num2 = 10; //A <- B(전체집합) a가 b의 서브타입
//let num3 = 10 as string;  //서로소 집합이라 오류
let num3 = 10; //단언 2번 시도시 가능 
/**
 * const 단언
 */
let num4 = 10; // const와 동일
//객체 타입과 함께 사용 readonly 미사용
let cat = {
    name: "야옹이",
    color: "yellow",
};
let post = {
    title: "게시글1",
    author: "호잉"
};
//옵셔널 체이닝: ? 자동추가됨 
//Why? null또는 undefined일 경우 실행
//const len : number = post.author?.length;  //오류: undefined이 될수 있어서
const len = post.author.length; // ! 로 바꿔줌
export {};
