
// 보통은 이렇게 구현 x 
// 복잡하고 정교한 프로그래밍이 필요할때 주로 쓰임!
// 설계도 역할
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
  }
  
	// implements => 구현
	// 캐릭터 클래스는 캐릭터인터페이스를 구현한다
  class Character implements CharacterInterface {
    constructor(
      public name: string,
      public moveSpeed: number,
			// 인터페이스 정의하는 필드들은 무조건 public!!!
      private extra: string // 따로 정의필요
    ) {}
  
    move(): void {
      console.log(`${this.moveSpeed} 속도로 이동!`);
    }
  }