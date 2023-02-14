/* const person = {};  //'객체 리터럴 방식' >> 함수를 지정해주고 값을 정해줬따
console.log(person); //{}
person.name = "kb";
console.log(person); //{ name : "kb"}
 */
/* const person = {};
person.name = {
    firstName : "kb", lastName : "kbb"};
person.likes = ["apple", "kbbb"];
    console.log(person);
 */
/* const person = {
    name : "kb"
};
delete person.name; // 또는 delete person["name"]
console.log(person); */

/* let num = 10;
let copyNum = num;
console.log(num); // 10
console.log(copyNum); // 10
 */
/* let num = 10;
let copyNum = num;
num = 20;
console.log(num); //20
console.log(copyNum); */  //10 , 서로 영향을 받지 않게 복사 = 깊은 복사

// 기본자료형과 참조형은 다르다고 했쬬
/* const num = 10;
const copyNum = num;
num = 20; //변수 num을 재할당 /const 오류
console.log(num);
console.log(copyNum); */
// const는 재할당 불가. 특별한 이유 아니면 var let const 중에 'let'을 사용하시라

/* const person = {
    name : "kb"
};
person = {
    name : "kbb"
}; */                      //객체 수정으로 오류나지만 

/* const person = {
    name : "kb"
}
console.log(person); 
person.name = "kbb";
console.log(person.name);  // 이건 속성을 바꾼거라 오류가 나지 않는다
console.log(person);  */ // 이건 속성을 바꾼거라 오류가 나지 않는다

/* const person = {
    name : "kb"
}
const copyPerson = person;  //변수 person에 할당된 객체를 변수 copyPerson에 복사
person.name = "kbb";        //변수 person에 할당된 객체의 값을 변경
console.log(person.name);
console.log(copyPerson.name);  */    //값을 똑같이 연동해서 써야할 때는 이처럼 '얕은 복사'. 객체수정=깊은 복사, 연동 안됨 / 속성 수정= 얕은 복사, 연동 됨!
//처음 구조를 어떻게 잡느냐에 따라, 얕은깊은 복사를 할지 for문을 쓸지 while문을 쓸지 결정된다는데
/* 2교시 */

/* const kbstudent = {
    name : "kim",
    age : 20
};
kbstudent.gender = "female";
delete kbstudent.age;
console.log(kbstudent); */





