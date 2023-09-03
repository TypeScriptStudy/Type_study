/**
 * 사용자 정의 타입 가드
 * 
 */

type Dog = {
	name: string;
	isBark: boolean;
};

type Cat = {
	name: string;
	isScratch: boolean;
};

type Animal = Dog | Cat;

//객체가 강아지인지 아닌지 확인 
function isDog(animal:Animal):animal is Dog{
	return (animal as Dog).isBark !== undefined
}

function isCat(animal:Animal):animal is Cat{
	return (animal as Cat).isScratch !== undefined;
}


function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}
