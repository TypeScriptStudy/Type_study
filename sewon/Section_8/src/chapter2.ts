/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

function getProperty(person: Person, key: keyof Person){
    return person[key];
    
    
}

const person: Person = { 
    name: "오세원",
    age : 12
}

getProperty(person, "name", )