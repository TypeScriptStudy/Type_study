/**
 * 클래스
 */

let studentA = {
    name: "오세원",
    grade: "A+",
    age: 27,
    study() {
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
}

// 쉼표 안 찍어도됨
class Student {
    // 필드 : 클래스가 만들 객체 프로퍼티
    name;
    grade;
    age;

    // 생성자 : 클래스를 호출하면 실제로 객체를 생성하는 역할 (= 매서드)
    constructor(name, grade, age) { // 매개변수로 name grade age 받음
        this.name = name; // this는 이 클래스가 만들고 있는 객체 (this는 객체이며 현재 만들고 있는 객체를 의미)
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부 함");
    }

    introduce() {
        console.log(`안녕하세요! ${this.name}`);
    }
}

// 새로운 클래스를 만들때는 new
// 생성자가 호출됨
// 인수로는 각각 name, grade, age를 전달
// 클래스를 이용해서 만든 객체 => 인스턴스
const studentB = new Student("오세원", "A+", 27);
console.log(studentB);
studentB.study(); // 열심히 공부 함
studentB.introduce(); // 안녕하세요!

// StudentDeveloper 클래스는 Student 클래스를 확장(상속)
class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        // super 라는 메서드를 호출
        // super를 호출하고 인수로 name, grade, age를 전달하면 슈퍼 클래스(확장 대상 클래스)의 생성자를 호출
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

console.log(StudentDeveloper);