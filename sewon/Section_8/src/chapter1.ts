
/**
 * 인덱스드 엑세스 타입
 */

interface  Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age : number;
		// locaiotn : string; // 프로퍼티 추가
    }
}

/! 프로퍼티 추가시 author 매개변수에도 추가 필요 /
function printAuthorInfo(author: { id: number; name: string; age: number; }) {
    console.log(`${author.name} - ${author.id}`);
} 

const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "오세원",
        age: 18,
    }
}

    // =================================================================

    // interface  Post {
    // 	...
    //     author: {
    //         id: number;
    //         name: string;
    //         age : number;
    //     }
    // }

    // function printAuthorInfo(author: Post["author"]) { /! 인덱스로 접근하는 타입으로 접근 === 인덱스드 엑세스 타입 / 
    // // 인덱스드 엑세스 타입을 이용해 Post에서 author 프로퍼티의 타입을 추출
    //     console.log(`${author.name} - ${author.id}`);
    // }

    // // 인덱스를 중첩하여 사용 가능
    // function printAuthorInfo(author: Post["author"]['id']) {
    // 	// author 매개변수의 타입은 number 타입이 됨
    //   console.log(`${author.id} - ${author.name}`);
    // }

    // const post: Post = {
    //    ...
    // }


    // =================================================================
    
    // type PostList = {
    //     title: string;
    //     content: string;
    //     author: {
    //       id: number;
    //       name: string;
    //       age: number;
    //     };
    //   }[];
      
    //   const post: PostList[number] = {
    //     title: "게시글 제목",
    //     content: "게시글 본문",
    //     author: {
    //       id: 1,
    //       name: "이정환",
    //       age: 27,
    //     },
    //   };