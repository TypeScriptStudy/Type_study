# Section_4

## 함수 오버로딩

- **오버로딩(Overloading)** : 같은 이름의 메서드 여러개를 가지면서 매개변수의 유형과 개수가 다르도록 하는 기술
- **오버라이딩(Overriding)** : 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의해서 사용

<aside>
💡 함수를 매개변수의 개수나 타입에따라 여러가지 버전으로 정의

**js 지원 안됨(오직 타입스크립트)**

</aside>

```tsx
// 함수 오버로딩

// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;


// 실제 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) { // 선택적 properties으로 모든 오버로드 시그니쳐가 의미있게
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
      }
    
    
}

func(1);        // ✅ 버전 1 
// func(1, 2);     // ❌ 
func(1, 2, 3);  // ✅ 버전 3 
```

= 대다수 타입스크립트 지원 라이브러리 함수 오버로딩 사용 

## 사용자 정의 타입가드

<aside>
💡 함수를 사용해 타입가드 정의

</aside>

```tsx
// 사용자 정의 타입 가드 
// = 참 또는 거짓을 반환하는 함수를 이용해 우리 입맛대로 타입 가드를 만들 수 있도록 도와주는 타입스크립트의 문법

type Dog = {
    name: string;
    isBark: boolean;
  };
  
  type Cat = {
    name: string;
    isScratch: boolean;
  };
  
  type Animal = Dog | Cat;
  
  function warning(animal: Animal) {
    if ("isBark" in animal) {
      console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else if ("isScratch" in animal) {
      console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
  }

// =>  in 연산자를 이용해 타입을 좁히는 방식은 좋지 않다
  
//(...)

// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}
  
// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}
  
function warning2(animal: Animal) {
    if (isDog(animal)) {
      console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else {
      console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
}
```