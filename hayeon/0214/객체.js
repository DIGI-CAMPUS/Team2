/* 

const person = {}; //객체 값을 비워둔 person 이라는 함수 지정 -> 객체리터럴 방식
console.log(person); //{}
person.name = "kb"; //변수 재할당
console.log(person); //{name : "kb"} 

*/

/* 

const person = {};
person.name = {
    fitstName: "kb",
    lastName: "kbb",
};
person.likes = ["apple", "banana"];
console.log(person); //동적으로 추가  // name: { fitstName: 'kb', lastName: 'kbb' }, likes: [ 'apple', 'kbbb' ]} 

*/

//동적으로 삭제
const person = {
    name: "kb",
};
delete person.name; //또는 delete person["name"]
console.log(person); //{} 출력

// let num = 10;
// let copyNum = num;
// console.log(num); //10
// console.log(copyNum); //10

// let num = 10;
// let copyNum = num;
// num = 20; //변수 num을 재할당 /const 오류
// console.log(num); //20
// console.log(copyNum); //10

/*  const num = 10;
 const copyNum = num;
 num = 20; // const 오류
 console.log(num); //20
 console.log(copyNum); //10 */
