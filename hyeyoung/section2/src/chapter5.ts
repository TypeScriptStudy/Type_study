//5. 열거형 타입 (Enum type) : 여러가지 값들에 각각 이름 부여, 열거하여 사용 (js no)
//숫자형 enum
enum Role {
    // ADMIN = 0,
    // USER = 1,
    // GUEST = 2,

    //자동 할당
    ADMIN,
    USER,
    GUEST,
}

// 문자형 enum
enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name : "한",
    role : Role.ADMIN, //0 <- 관리자
    language : Language.korean
};

const user2 = {
    name : "혜",
    role : Role.USER, //1 <- 일반유저
};

const user3 = {
    name : "영",
    role : Role.GUEST, //2 <- 게스트
};

console.log(user1, user2, user3)

/** 컴파일된다면 enum은 사라지지 않음 */

/**enum사용은 권장되지 않는다?
 * Tree shaking 불가
 * 참고: https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking */