/*
클래스
*/

let studentA = {
    name:"임해영",
    grade:"A+",
    age:27,
    study() {
        console.log("열공");
    },
    introduce() {
        console.log("ㅎㅇ");
    },
};

//클래스를이용해서 만든 객체 -> 인스턴스
//스튜던트 인스턴스
class Student {
    //필드
    name;
    grade;
    age;

    //생성자
    constructor(name,grade,age) {
        this.name=name;
        this.grade=grade;
        this.age=age;

    }

    //메서드
    study() {
        console.log("열공");
    }

    introduce() {
        console.log(`ㅎㅇ ${this.name}임`);
    }

}
class StduentDeveloper extends Student{
    //필드
    favoriteSkill;

    //생성자
    constructor(name,grade,age,favoriteSkill) {
        super(name,grade,age);
        this.favoriteSkill=favoriteSkill;

    }

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const studentDeveloper = new StduentDeveloper("임해영","B+",27,"Typescript");
console.log(studentDeveloper);
studentDeveloper.programming();


let studentB = new Student("임해영" , "A+",27);

console.log(studentB);
studentB.study();
studentB.introduce();