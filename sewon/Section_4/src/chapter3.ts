// 함수 오버로딩



// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) { // 선택적 properties으로 모든 오버로드 시그니쳐가 의미있게
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
    
    
}

func(1);        // ✅ 버전 1 - 오버로드 시그니쳐
// func(1, 2);     // ❌ 
func(1, 2, 3);  // ✅ 버전 3 - 오버로드 시그니쳐