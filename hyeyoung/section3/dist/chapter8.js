/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * Ex) string | number
 */
//Admin -> {name}님 현제까지 {kickCount}명 강퇴했습니다.
//Member -> {name}님 현재까지 {point}모았습니다.
//Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user) {
    //방법 1. string 리터럴 타입 사용
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하였습니다.`);
            break;
        }
    }
    //방법2
    if (user.tag === "ADMIN") { //admin 타입 
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    }
    else if (user.tag === "MEMBER") { //member 타입
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    }
    else { //guest 타입
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하였습니다.`);
    }
}
// type AsyncTask={
//     state:"LOADING" | "FAILED" | "SUCCESS";
//     error?: {
//         message: string;
//     };
//     response?: {
//         data: string;
//     };
// };
//로딩중 -> 콘솔에 로딩중 출력
//실패 -> 실패: 에러메시지 출력
//성공 -> 성공 : 데이터를 출력
function processResult(task) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}
const loading = {
    state: "LOADING",
};
const failed = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~",
    },
};
const sucess = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~",
    },
};
export {};
