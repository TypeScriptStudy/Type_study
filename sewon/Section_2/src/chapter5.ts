// enum 타입 (타입스크립트에서만 있음)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum은 컴파일해도 사라지지않고 자바스크립트 객채로 변환!!
enum Role {
    ADMIN ,
    USER ,
    GUEST ,
}
  
enum Language {
    korean = "ko",
    english = "en",
    
  }
  
  const user1 = {
    name: "이정환",
      role: Role.ADMIN, //관리자
      language: Language.korean,// "ko"
  };
  
  const user2 = {
    name: "홍길동",
    role: Role.USER, // 회원
  };
  
  const user3 = {
    name: "아무개",
    role: Role.GUEST, // 게스트
  };
  
console.log(user1, user2, user3);
