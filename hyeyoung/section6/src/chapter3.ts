/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    //interface로 정의시 무조건 public (private, protected 불가)
    //private, protected 필요시 하단 클래스 생성자에 추가
    name: string;
    moveSpeed: number;
    move(): void;
}

//Chracter는 CharacterInterface를 구현한다.
class Chracter implements CharacterInterface {
    // name: string;
    // moveSpeed: number;

    // constructor(name: string, moveSpeed: number){
    //     this.name = name;
    //     this.moveSpeed = moveSpeed;
    // }

    //접근 제어자 사용하여 구현
    constructor(public name: string,
         public moveSpeed: number,
         private level: string ){}    

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동`);   
    }
}