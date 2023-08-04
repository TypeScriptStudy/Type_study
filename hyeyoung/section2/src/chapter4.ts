//4. 타입 별칭과 인덱스 시그니처
//타입 별칭
type User = {
    id: number,
    name : string,
    nickname : string,
    birth : string,
    bio : string,
    location: string
}
//타입 별칭 정의는 js에서는 없어짐

function func(){
    type User = {};
}

let user : User = {
    id:1,
    name:"한혜영",
    nickname:"hoing",
    birth : "1999.08.10",
    bio : "안녕하세요",
    location : "마포구"
}

let user2 : User = {
    id:2,
    name:"한혜영2",
    nickname:"hoing2",
    birth : "1999.08.10",
    bio : "안녕하세요",
    location : "의정부"
}


//인덱스 시그니처 : 값이 무수히 많을때 
// key value 규칙 기준으로 객체 타입 지정 
type CountryCodes = {
    [key : string] : string;
}

let countryCodes : CountryCodes= {
    Korea : 'ko',
    UnitedState : 'us',
    UnitedKingdom: 'uk'
}

type CountryNumberCodes = {
    [key : string] : number;
    //Korea : string; //추가적 property를 사용하려면 index 시그니처 value타입과 일치 or 호환되어야함
}

let countryNumberCodes : CountryNumberCodes= {
    Korea : 410,
    UnitedState : 840,
    UnitedKingdom: 826
}

let countryNumberCodes2 : CountryNumberCodes= {
    //규칙을 위반할 property가 없기 떄문에 정상 실행됨
    //Korea:number 추가시 오류 사라짐
}