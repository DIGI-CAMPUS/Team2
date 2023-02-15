// const person = {} ;
// console.log(person); // {}
// person.name = "kb" ;
// console.log(person); //{ name : "kb"}


// const person = {};
// person.name={
//   firstName : "kb", lastName : "kbb" };
// person.likes = ["apple","kbbb"];
//   console.log(person);

// const person = {
//   name : "kb"
// };

// delete person.name;
// console.log(person);


  // var warrior = {
  //   level : 10,
  //   hp : 100,
  //   printLevel (){
  //   console.log(this.level);
  //   }  
  // }

  // warrior.printLevel ();

  //깊은 복사

  // let num = 10;
  // let copyNum = num;
  // num = 20;
  // console.log(num);
  // console.log(copyNum);

  //얕은 복사 

  // const num = 10;
  // const copyNum = num;
  // num = 20;
  // console.log(num);
  // console.log(copyNum);

  //깊은 복사 

  // const person = {
  //   name : "kb"
  // }

  // person = {
  //   name : "kbb"
  // }

  //깊은 복사 2

  // const person = {
  //   naem : "kb"
  // }

  // const copyPerson = person; //변수 person에 할당된 객체를 변수 copyPerson에 복사
  // person.name = "kbb"; //변수 person에 할당된 객체의 값을 변경
  // console.log(person.name);
  // console.log(copyPerson.name);




  // const kbstudent = {
  //   name : "kim",
  //   age : 20
  // };

  // kbstudent.gender = "female";
  // delete kbstudent.age;
  // console.log(kbstudent);




  let user1 = { 
    name : "john"
   };
  let admin = { name : "admin" };

  function sayy() {
    console.log(this.name);
  }

  user1.f=sayy;
  admin.f=sayy();
  user1.f();
  console.log(user1);
  console.log(admin);