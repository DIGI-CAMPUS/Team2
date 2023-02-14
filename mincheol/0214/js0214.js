// const person = {};
// console.log(person);
// person.name = "kb";
// console.log(person);

// const person = {};
// person.name = {
//   firstName: "kb",
//   lastName: "kbb",
// };
// person.likes = ["apple", "kbbb"];
// console.log(person);

// const person = {
//   name: "kb",
// };
// delete person.name;
// console.log(person);

// let num = 10;
// let copyNum = num;
// console.log(num);
// console.log(copyNum);

// let num = 10;
// let copyNum = num;
// num = 20;
// console.log(num);
// console.log(copyNum);

// const person = {
//   name: "kb",
// };
// console.log(person);
// person = {
//   name: "kbb",
// };
// console.log(person);

// const person = {
//   name: "kb",
// };
// console.log(person);
// person.name = "kbb";
// console.log(person);

// const person = {
//   name: "kb",
// };
// const copyPerson = person;
// person.name = "kbb";
// console.log(person);
// console.log(copyPerson);

let user1 = { name: "John" };
let admin = { name: "Admin" };

function sayy() {
  console.log(this.name);
}

user1.f = sayy; // 변수에 함수를 담을때는 ()를 붙이지않는듯!!
admin.f = sayy(); // sayy함수를 담고싶었는데 ()를 붙여서 호출이됨 결과는 undefined
user1.f();
console.log(user1);
console.log(admin);

// const kbstudent = {
//   name: "kim",
//   age: 20,
// };
// kbstudent.genger = "female";
// delete kbstudent.age;
// console.log(kbstudent);
