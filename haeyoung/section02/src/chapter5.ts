//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//타스에만 존재
//장점 코드 줄이 길어지면 admin을 0으로 했는지 1로 했는지 까먹을때,
//korean을 ko로 했는데 korea로 했는지 까먹을떄 유용
//enum이 컴파일시 사라지지않고 자스의 객체로 변환

enum Role {
    ADMIN=0,
    USER=1,
    GUEST=2
    //숫자형 이넘

    // ADMIN
    // USER
    // GUEST
    //자동으로 0,1,2 할당

    // ADMIN=10,
    // USER,
    // GUEST
    //자동으로 10,11,12 할당

    // ADMIN,
    // USER=9,
    // GUEST
    //자동으로 8,9,10 할당
}


enum Language {
    korean = "ko",
    english = "en",
}

const user1={
    name: "임해영",
    role:Role.ADMIN, // 0 : 관리자
    language: Language.korean,
}

const user2={
    name: "오세원",
    role:Role.USER // 0 : 일반 유저
}

const user3={
    name: "한혜영",
    role:Role.GUEST // 0 : 게스트
}

console.log(user1,user2,user3)