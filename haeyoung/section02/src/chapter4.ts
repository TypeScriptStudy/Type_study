//타입 별칭
//코드의 중복 제거
type User = {
    id:number;
    name:string;
    nickname:string;
    birth:string;
    bio:string;
    location:string;
};

function func() {
    type User = {};
    //함수안의 User 와 함수밖 User는 다른
}

// let user: {
//     id:number;
//     name:string;
//     nickname:string;
//     birth:string;
//     bio:string;
//     location:string;
// } = {
//     id: 1,
//     name: "임해영",
//     nickname: "haeyoung",
//     birth:"1995.10.09",
//     bio:"ㅎㅇ",
//     location:"서울시"
// }

let user: User = {
    id: 1,
    name: "임해영",
    nickname: "haeyoung",
    birth:"1995.10.09",
    bio:"ㅎㅇ",
    location:"서울시"
};

let user1: User = {
    id: 2,
    name: "임해영",
    nickname: "haeyoung",
    birth:"1995.10.09",
    bio:"ㅎㅇ",
    location:"서울시"
};


//인덱스 시그니처
//객체 타입의 정의를 더 유연하게 도와줌
//키와 밸류의 규칙을 기준으로 객체의 타입을 정의해줌
//이 규칙을 위반하지 않으면 모든걸 허용함
//주의*** null도 허용

type CountryCodes = {
    [key:string] : string
    //key:string , property:string

};

let countryCodes :CountryCodes = {
    Korea: 'ko',
    UnitedState:"us",
    UnitedKingdom:"uk",
};

type CountryNumberCodes = {
    [key:string] : number;
    Korea: number;
    //Korea 라는 number 프로퍼티를 반드시 가지도록
    //[key:string] : number;
    //Korea: string;
    //오류!! 인덱스 시그니처를 사용하는 객체타입에서 추가적인  value의 타입이 인덱스 시그니처의 타입과 일치하고 호환이 되어야함
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    us:840,
    uk:826
}

