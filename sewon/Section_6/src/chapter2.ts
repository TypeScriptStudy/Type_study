/**
 * 접근 제어자(Access Modifier)란? 클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능
 * 타입스크립트에서만 제공되는 기능
 * => public, private, protected
 */

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;
  
    // 생성자
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
  
    // 메서드
    work() {
      console.log("일함");
    }
}

// const employee = new Employee("이정환", 27, "devloper");

// employee.name = "홍길동";
// employee.age = 30;
// employee.position = "디자이너";

// // public은 기본값!! 

// class Employee {
//     // 필드
//     private name: string; // private 접근 제어자 설정
//     public age: number;
//     public position: string;
  
//     ...
  
//     // 메서드
//     work() {
//       console.log(`${this.name}이 일함`); // 여기서는 접근 가능
//     }
//   }
  
//   const employee = new Employee("이정환", 27, "devloper");
  
//   employee.name = "홍길동"; // ❌ 오류
//   employee.age = 30;
//   employee.position = "디자이너";

// class Employee {
//     // 필드
//     private name: string; // private 접근 제어자 설정
//     protected age: number;
//     public position: string;
  
//     ...
  
//     // 메서드
//     work() {
//       console.log(`${this.name}이 일함`); // 여기서는 접근 가능
//     }
//   }
  
//   class ExecutiveOfficer extends Employee {
//    // 메서드
//     func() {
//       this.name; // ❌ 오류 
//       this.age; // ✅ 가능
//     }
//   }
  
//   const employee = new Employee("이정환", 27, "devloper");
  
//   employee.name = "홍길동"; // ❌ 오류
//   employee.age = 30; // ❌ 오류
//   employee.position = "디자이너";