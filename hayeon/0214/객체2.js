/* const person = {
    name: "kb",
};
person = {
    name: "kbb",
}; */

/* const person = {
    name: "kb",
};
person.name = "kbb";
console.log(person.name); */

const person = {
    name: "kb",
};
const copyPerson = person; //변수 person에 할당된 객체를 변수 copyPerson에 복사
person.name = "kbb"; // 변수 person에 할당된 객체의 값을 변경
console.log(person.name);
console.log(copyPerson.name);

//깊은복사 얕은복사
