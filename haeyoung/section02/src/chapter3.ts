//object 객체
let user1: object = {
    id:1,
    name:"임해영"
}
//이렇게 정의하면 타스는 object이외의 정보를 모름
//user1.id 오류

let user2: {
    id: number;
    name: string;
    //객체 리터럴 타입
} = {
    id:1,
    name:"임해영"
}

user2.id

let dog: {
    name: string;
    color: string;
} = {
    name: "이브",
    color:"black",
}

//타스는 개체를 정의할때 객체를 구조 기준으로 타입을 정의
//구조적 타입 시스템
//->property based TS
//이름을 기준으로 타입을 정의(c언어 , java)
//명목적 타입 시스템


let user: {
    id?: number;
    //id?: 있어도 되고 없어도 되는 선택적 프로퍼티
    //있으면 number 타입
    name: string;
    //객체 리터럴 타입
} = {
    id:1,
    name:"임해영"
}


user = {
    name:"홍길동"
    //회원의 id를 모를경우

}


let config: {
    readonly apikey: string;
    //readonly:값 변경을 막아줌
}={
    apikey: "MY API KEY",
};

// config.apikey = "hacked";