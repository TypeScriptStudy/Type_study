// 타입 별칭

// 동일한 스코프에 동일한 이름의 타입 별칭을 선언하는 것은 불가능
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};
  

// 스코프가 다르다면 다음과 같이 중복된 이름으로 여러개의 별칭을 선언 가능
function name() {
    type user = {

    }
    
}
  
  let user: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
  };
  
  let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
  };
  
// 인덱스 시그니처 (인덱스 시그니쳐는 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법)

type CountryCodes = {
    // [key : string] : string 은 인덱스 시그니쳐 문법으로 이 객체 타입에는 key가 string 타입이고 value가 string 타입인 모든 프로퍼티를 포함된다 라는 의미
    [key: string]: string;
  };
  
  let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    // (... 약 100개의 국가)
    Brazil : 'bz'
  };

  //주의할 점!! 인덱스 시그니쳐를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치