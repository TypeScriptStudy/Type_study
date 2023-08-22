/*
타입 단언
*/

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;

person.name = "해영"
person.age = 27;