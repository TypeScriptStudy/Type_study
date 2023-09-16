# 8. 타입 조작하기

Due Date: 2023년 9월 15일
Done Date: 2023년 9월 15일
Status: Done
🚀 Goal: 타입을 조작해보자!

# 타입 조작하기

---

기본타입이나 별칭 인터페이스등 원래 존재하는 타입들을 특수한 문법을 이용해서 상황에 따라 각각 새로운 타입으로 변환 하는 기능

- 제네릭
- **인덱스드 엑세스 타입**
- **keyof 연산자**
- **Mapped 타입**
- **템플릿 리터럴 타입**
- 조건부 타입

## 1. 인덱스드 엑세스 타입

---

객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입

### 1. 객체

****객체 프로퍼티의 타입을 추출해서 사용****

```tsx

/**
 * 인덱스드 엑세스 타입
 */

interface  Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age : number;
				locaiotn : string; // 프로퍼티 추가
    }
}

/! 프로퍼티 추가시 author 매개변수에도 추가 필요 /
function printAuthorInfo(author: { id: number; name: string; age: number; }) {
    console.log(`${author.name} - ${author.id}`);
} 

const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "오세원",
        age : 18,
    }
}
```

- location 프로퍼티가 추가 될시 아래 함수의 author 매개변수에도 똑같이 location 프로퍼티 추가필요
- 만약 프로퍼티수가 많아지거나 똑같은 함수가 여러개일때는 일일히 적어줘야하는 불편함이 있음!!

그럼,

인덱스드 엑세스 타입을 이용해 Post에서 author 프로퍼티의 타입을 추출해 사용해보자

```tsx

interface  Post {
	...
    author: {
        id: number;
        name: string;
        age : number;
    }
}

function printAuthorInfo(author: Post["author"]) { /! 인덱스로 접근하는 타입으로 접근 === 인덱스드 엑세스 타입 / 
// 인덱스드 엑세스 타입을 이용해 Post에서 author 프로퍼티의 타입을 추출
    console.log(`${author.name} - ${author.id}`);
}

// 인덱스를 중첩하여 사용 가능
function printAuthorInfo(author: Post["author"]['id']) {
	// author 매개변수의 타입은 number 타입이 됨
  console.log(`${author.id} - ${author.name}`);
}

const post: Post = {
   ...
}
```

- `Post["author"]`는 Post 타입으로부터 author 프로퍼티의 타입을 추출한다!
- 따라서 author에 프로퍼티가 추가되더라도 `Post["author"]` 에는 자동적으로 추가된 프로퍼티가 적용된다!
- 또한 인덱스를 중첩하여 사용 가능하다!

단! 주의사항!

<aside>
🚨 주의사항!

1. 인덱스에는 값이 아닌 타입만 가능!
2. 존재하지 않는 프로퍼티 이름을 쓰면 오류발생!
</aside>

```tsx
/! 타입이 아닌 값을 넣었을 경우/
const authorKey = "author";

function printAuthorInfo(author: Post[authorKey]) { // ❌ 오류 발생
  console.log(`${author.id} - ${author.name}`);
}

/! 존재하지 않는 프로퍼티 사용 시/
2.
function printAuthorInfo(author: Post["what"]) { // ❌
  console.log(`${author.id} - ${author.name}`);
}
```

### 2. 배열

특정 배열의 요소 타입을 추출해서 사용해보자!

```tsx
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};
```

- `PostList[number]`는 PostList 배열 타입으로부터 요소의 타입을 추출 사용
- Number Literal 타입으로 넣어도 됌!! ex) `const post: PostList[0]`
    
    ```tsx
    const post: PostList[0] = {
      title: "게시글 제목",
      content: "게시글 본문",
      author: {
        id: 1,
        name: "이정환",
        age: 27,
      },
    };
    ```
    

### 3. 튜플

> 튜플이란? 열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미
> 
> 
> ```tsx
> let arr: [string, number] = ['hi', 10];
> ```
> 

튜플의 각 요소들의 타입또한 다음과 같이 인덱스드 엑세스 타입으로 쉽게 추출해서 사용해보자!

```tsx
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number] /! 최적의 공통 타입 /
// number | string | boolean 

type Tup4 = Tup[3] // ❌ 오류 발생
// 존재하지 않는 튜플 요소를 추출해서 사용 못함!

```

## 2. keyof 연산자

---

프로퍼티 키들을 모두 String 리터럴 유니온 타입으로 추출하는 연산자

keyof 연산자를 사용해보자!

```tsx
/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

function getProperty(person: Person, key: String){ // ❌ 오류 발생
    return person[key]; 
}

function getProperty(person: Person, key: "name" | "age"){ // ❌ 유니온 타입으로 해도 문제가 발생!
    return person[key]; 
}

const person: Person = { 
    name: "오세원",
    age : 12
}

getProperty(person, "name", )
```

- `getProperty` 의 key 타입을 String으로만 오류 발생!
    - why?
        - 모든 문자열 값이 Person 객체의 key라고 볼수 없음!
        - 만약 `getProperty(person, "name2", )` 가 존재 한다면 , key 타입에서는 문제가 되지않지만 Person객체에 `“name2”` 라는 프로퍼티가 존재하지 않는다.
        - 따라서 key를 String으로 정의하기에는 문제가 발생한다!
- 그렇다고 `key: "name" | "age"` (유니온 타입)으로 직접 정의해도 문제가 발생!
    - why?
        - 지금은 Person 객체의 프로퍼티가 2개밖에 없지만 수십,수백개일 경우 전부다 입력이 필요하다!
        - 객체 프로퍼티가 수정될시 key 타입을 전부 수정해줘야함!

그럼, Keyof 연산자를 사용해볼까요?

```tsx
interface Person {
  name: string;
  age: number;
  location: string; // 추가
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "오세원",
  age: 27,
};
```

- `keyof Person` 은 Person 객체 타입의 프로퍼티 key들을 전부 유니온타입으로 추출

> typeof와 같이 사용가능
> 
> 
> ```tsx
> type Person = typeof person; /! person 변수의 타입을 추론!/
> 
> function getPropertyKey(person: Person, key: keyof typeof Person) {
>   return person[key];
> }
> 
> const person: Person = {
>   name: "오세원",
>   age: 27,
> };
> ```
> 

<aside>
🚨 주의사항

- 무조건 타입에만 사용가능!
</aside>

## 3. 맵드 타입 (활용도가 높고 실무에서 많이 쓰임!!)

---

기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입

```tsx
interface User {
  id: number;
  name: string;
  age: number;
}

function fetchUser(): User {
  (...)
}

function updateUser(user: User) {
  // ... 유저 정보 수정 기능
}

updateUser({
	id : 1,
	name : "오세원"
  age: 25
});
```

- 여기서 “age”만 변경하고 싶은데 updateUser 함수의 매개변수 타입이 User 타입으로 되어 있어 수정하고 싶은 프로퍼티만 골라서 보낼 수 없는 상황

그러면 아래와 같이 함수 하나를 더 생성해야 하는데 User와 PartialUser 안에 서로 중복된 프로퍼티를 정의 ⇒ 좋지않음!

```tsx
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  id?: number;
  name?: string;
  age?: number;
}

(...)

function updateUser(user: PartialUser) {
  // ... 유저 정보 수정 기능
}

updateUser({ // ✅
  age: 25
});
```

이럴 때 바로 맵드 타입을 이용!!

```tsx
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; /!대괄호 뒤에 ? 는 모든 프로퍼티가 선택적 프로퍼티로 정의 /
};

==> 이렇게도 가능!! keyof 연산자 활용!
type PartialUser = {
  [key in keyof User]?: User[key];
};

/! 모든 프로퍼티에 boolean 타입 적용 /
type BooleanUser = {
	[key in keyof User] : boolean
}

/! 모든 프로퍼티에 readonly 적용 /
type ReadonlyUser = {
	readonly [key in keyof User] : User[key];
}
```

- `[key in “id” | “name” | “age”]` 는 이 객체 타입은 key가 한번은 id, 한번은 name, 한번은 age가 된다는 뜻

<aside>
🚨 주의사항

- 맵드 타입은 인터페이스에서는 사용 불가능 ⇒ 타입 별칭으로 사용
</aside>

## 4. 템플릿 리터럴 타입

---

String 리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입 

> 문자열로 여러가지 상황들을 표현해야 하는 경우 사용!
> 

예를 들어 ,

```tsx
type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `red-dog` | 'red-cat' | 'red-chicken' | 'black-dog' ...;
```

위 코드에서 

- Color와 Animal은 각각 3개의 String Literal 타입으로 이루어진 Union 타입
- ColoredAnimal은 Color와 Animal을 조합해 만들 수 있는 모든 가지수의 String Literal 타입으로 이루어진 Union 타입

하지만 전부 쓰기 번거롭다!!

템플릿 리터널 타입을 활용하면 아래 코드처럼 활용 가능

```tsx
type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;
```