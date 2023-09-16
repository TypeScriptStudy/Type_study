/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
  }
  
  type PartialUser = {
    id?: number;
    name?: string;
    age?: number;
  }
  
  
  
  function updateUser(user: PartialUser) {
    // ... 유저 정보 수정 기능
  }
  
  updateUser({ // ✅
    age: 25
  });