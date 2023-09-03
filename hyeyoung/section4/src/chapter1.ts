/**
 * 함수타입 표현식과 호출 시그니처
 * - 함수 타입 표현식 : 비슷한 함수 정의시 중복 작성하지 않아도 됨
 * - 매개변수 개수와 타입이 같아야 함
 */

//타입 별칭 사용
type Operation = (a:number, b: number) => number;

//매개변수, 반환값 타입 정의 안해도 됨
const add : Operation = (a, b) => a+b;
const sub : Operation = (a, b) => a-b;
const multiply : Operation = (a, b) => a*b;
const divide: Operation = (a, b) => a/b;


//호출 시그니쳐 ( 콜 시그니쳐 )
//js함수 또한 객체이기 떄문에 객체 정의 방식 사용 가능
type Operation2 = {
    (a: number, b:number): number;
    name: string; //추가 가능
   };
   
   //매개변수, 반환값 타입 정의 안해도 됨
   const add2 : Operation2 = (a, b) => a+b;
   const sub2 : Operation2 = (a, b) => a-b;
   const multiply2 : Operation2 = (a, b) => a*b;
   const divide2: Operation2 = (a, b) => a/b;