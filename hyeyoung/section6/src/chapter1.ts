/**
 * 타입스크립트의 클래스 
 */

import { off } from "process";

//직장인 객체 생성
const employee = {
    name: "한혜영",
    age: 25,
    position: "developer",
    work() {
        console.log("일함");
    },
};

/**
 * 참고
 * 추론 불가 할 시 암시적 any 할당됨 => 상관없으면 noImplicitAny: false
 */
class Employee {
    //필드
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //메서드
    work(){
        console.log("일함");
    }
}

//파생 클래스 생성
class ExecutiveOfficer extends Employee{
    //필드
    officeNumber: number;

    //생성자
    constructor(name:string, age:number, position:string, officeNumber:number){
        super(name, age, position);  //파생 클래스는 필수
        this.officeNumber = officeNumber;
    }
}

//클래스는 타입으로도 활용됨  Ex) : Employee
const employeeB = new Employee('한혜영', 25, '개발자');
console.log(employeeB);

/**
 * 타입으로 활용 -> ts는 구조적 타입 시스템 
 * -> 클래스 구조(필드, 메서드) 본 후 Employee 타입이라고 하자고 함
 */

const employeeC :Employee = {
    name: "",
    age: 0,
    position: "",
    work(){}
}




