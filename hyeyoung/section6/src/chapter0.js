/**
 * 클래스
 */

let studentA = {
    name: "한혜영",
    grade: "A",
    age: 25,
    study() {
        console.log("Ts Study");
    },
    introduce(){
        console.log("안녕하세요");
    }
}

class Student {
    // 필드 (클래스가 만들어 낼 객체의 property)
    name;
    grade; 
    age;

    //생성자 (객체 생성 역할)
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //메서드
    study() {
        console.log("강아지풀 공부중");
    }

    introduce(){
        console.log(`안녕하세요, ${this.name}입니다.`);
    }
}

class StudentDeveloper extends Student{
    //필드
    favoriteSkill;

    //생성자
    constructor(name, grade, age, favoriteSkill){
        super(name, grade, age);  //부모 클래스의 생성자 호출
        this.favoriteSkill = favoriteSkill;
    }

    //추가 메서드
    programing(){
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}


//클래스 이용해서 만든 객체 => 인스턴스
//스튜던트 인스턴스
let studentB = new Student("임해영", "A+", 5);
console.log(studentB);
studentB.introduce();
studentB.study();  //클래스 메소드 호출


const studentDeveloper = new StudentDeveloper("한혜영", "B+", 25, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programing();



