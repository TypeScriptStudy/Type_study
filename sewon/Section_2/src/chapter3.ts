// 타입스크립트는 자바나 c언어의 이름을 기준으로 타입을 정의하는 명목적 타입 시스템과 달리 구조를 기준으로 타입을 정의하는 구조적 타입 시스템

let user: {
    id? : number // 선택적 프로퍼티가 된 id (있어도되고 없어도된다!)
    name : string
} = {
    id: 1,
    name: "이정환",
};
  
user.id

user = {
     // 오류 발생!
    name: "홍길동",
};

// =================================================
  
let test: {
    
    readonly apikey: string; // name은 이제 Readonly 프로퍼티가 되었음 (특정 프로퍼티를 읽기 전용)
  } = {
    
    apikey: "ASDASDASDSWQEQDSAD",
  };
  
//   test.apikey = "dskfd"; // 오류 발생

// =================================================

// object 타입은 단순 값이 객체임을 표현하는 것 외에는 아무런 정보도 제공하지 않는 타입
  
let dog: {
    name: string;
    color: string;
  } = {
    name: "돌돌이",
    color: "brown",
  };