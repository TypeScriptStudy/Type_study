//5. 열거형 타입 (Enum type) : 여러가지 값들에 각각 이름 부여, 열거하여 사용 (js no)
//숫자형 enum
var Role;
(function (Role) {
    // ADMIN = 0,
    // USER = 1,
    // GUEST = 2,
    //자동 증가 -> 0,1,2 할당됨 
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// 문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "한",
    role: Role.ADMIN,
    language: Language.korean
};
const user2 = {
    name: "혜",
    role: Role.USER, //1 <- 일반유저
};
const user3 = {
    name: "영",
    role: Role.GUEST, //2 <- 게스트
};
console.log(user1, user2, user3);
export {};
/** 컴파일된다면 enum은 사라지지 않음 */
/**enum사용은 권장되지 않는다? -> union타입 사용
 * Tree shaking 불가
 * 참고: https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking */ 
