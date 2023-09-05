/**
 * 접근 제어자
 * - ts 클래스에서만 제공
 * - access modifier
 * -> public private protected
 * - 객체지향 은닉화에 효과적!!!
 */

class Employee {
    //필드
    //public 기본값 접근 제어자
    //private 해당 클래스 내에서 접근 가능, 파생 클래스 불가
    //protected 해당, 파생 클래스 내에서 접근 가능
    private name: string;
    protected age: number;
    position: string;

    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //**생성자 매개변수에 접근 제어자 할당 시 필드 선언 지워야 함
    // why? ts가 자동으로 필드 만들고, 초기값 할당 
    // constructor( private name: string,
    //     protected age: number,
    //     position: string
    // ){}


    //메서드
    work(){
        console.log(`${this.name} 일함`);
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

    //메서드
    example(){
        //private 접근 불가
        // console.log(`${this.name} 일함`);

        //protected 접근 가능
        console.log(`나이: ${this.age}`);   
    }
}

//인스턴스 선언
const employee = new Employee("한혜영", 25, "developer");
// employee.name = "한혜영";  private 접근 불가
// employee.age = 26; protected 접근 불가
employee.position = "웹 개발자";

console.log(employee);

