//타입 별칭 정의는 js에서는 없어짐
function func() {
}
let user = {
    id: 1,
    name: "한혜영",
    nickname: "hoing",
    birth: "1999.08.10",
    bio: "안녕하세요",
    location: "마포구"
};
let user2 = {
    id: 2,
    name: "한혜영2",
    nickname: "hoing2",
    birth: "1999.08.10",
    bio: "안녕하세요",
    location: "의정부"
};
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826
};
let countryNumberCodes2 = {
//규칙을 위반할 property가 없기 떄문에 정상 실행됨
//Korea:number 추가시 오류 사라짐
};
export {};
