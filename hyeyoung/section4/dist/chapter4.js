/**
 * 사용자 정의 타입 가드
 *
 */
//객체가 강아지인지 아닌지 확인 
function isDog(animal) {
    return animal.isBark !== undefined;
}
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warning(animal) {
    if (isDog(animal)) {
        console.log(animal.isBark ? "짖습니다" : "안짖어요");
    }
    else {
        console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
}
export {};
