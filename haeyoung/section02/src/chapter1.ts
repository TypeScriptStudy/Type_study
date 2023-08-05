//number
let num1: number = 123;
//변수의 타입을 정의하는것 = 주석(annotation)
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;//양의 무한대
let num6: number = -Infinity;//음의 무한대
let num7: number = NaN;//Not a number

//string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

//boolean
let bool1: boolean = true;
let bool2: boolean = false;

//null
let null1: null = null;

//undefined
let unde1: undefined = undefined;

//리터럴
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;

// let numA: number = null;
//타스는 number타입에 null값 넣는걸 허용X
//임시로 null값을 넣고 싶을때 "strictNullChecks": false, 옵션 사용
