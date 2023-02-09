//console.log("hello world");
//document.write("<h1>자바스크립트</h1>" + "아무말1" + "아무말2");
//var reply = prompt("확인하기", "디폴트텍스트");

//---------------------------------실습1.
/* var n = 10;
var n = 20;
console.log(n);
 */

//3가지 변수의 차이를 이해해야됨
//var, let, const

//---------------------------------실습2.
/* var currentyear = 2023;
var birthyear;
var age;

birthyear = prompt("태어난 연도를 입력하세요");
age = currentyear - birthyear + 1;
document.write(currentyear + "년 현재<br>");
document.write(birthyear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");
 */

//--------------------------------실습3.
/* let sum = 0.1 + 0.2;
console.log(sum);

let sum2 = (0.1 * 10 + 0.2 * 10) / 10;
console.log(sum2);

let string1 = "Hello world!";
console.log(string1);

let string2 = "Hello world!";
console.log(string2);

let string3 = "Hello " + "wor\nld!";
console.log(string3);

let boolean1 = true;
console.log(boolean1);

let boolean2 = false;
console.log(boolean2);

let boolean3 = 10 < 20;
console.log(boolean3);

let studentscore = [60, 70, 80, 90];
console.log(studentscore);
console.log(studentscore[1]);

let studentscore2 = [60, "jjj", 80, true];
console.log(studentscore2);
console.log(studentscore2[1]);

let studentscore3 = {
  ko: 80,
  ko2: 90,
  ko3: 870,
};
console.log(studentscore3);
console.log(studentscore3["ko2"]);

var a = 10;
var b = a++ + 5;
console.log(a);

let increment = 10;
increment++;
console.log(increment);

let increment2 = 10;
increment2--;
console.log(increment2);

let num = 10;
let subNum = ++num;
console.log(subNum);

let num2 = 10;
let subNum2 = ++num2;
console.log(subNum2);
 */

//--------------------------------실습4.
// `(~있는곳) 이건 웹틱이다

/* let a = 10; //전역변수
const b = 20;
function sum() {
  a = 50;
  let b = 10; //지역변수
  console.log(`함수 내부 a : ${a}`);
  console.log(`함수 내부 b : ${b}`);
}

sum();
console.log(`함수 외부 a : ${a}`);
console.log(`함수 외부 b : ${b}`);
 */

//--------------------------------실습5.

// 1~5 까지 더하기
/* var sum = 0;
var a = 0;
for (var i = 1; i < 6; i++) {
  sum = sum + i;
  console.log(i);
}
console.log(sum); */

// 구구단
/* var i, j;
for (i = 1; i < 10; i++) {
  document.write("<h3>" + i + "단</h3>");
  for (j = 1; j < 10; j++) {
    document.write(i + "X" + j + " = " + i * j + "<br>");
  }
} */

/* document.write('<div class="gugudan">');
document.write("<h1>구구단</h1>");
document.write('<div class="gugudanzone">');
var i, j;
for (i = 1; i < 4; i++) {
  document.write("<div>");
  document.write("<h3>" + i + "단</h3>");
  for (j = 1; j < 10; j++) {
    document.write(i + "X" + j + " = " + i * j + "<br>");
  }
  document.write("</div>");
}
document.write("</div>");
document.write("</div>"); */
//--------------------------------------------
/* document.write('<div class="star">');
var i, j;
for (i = 0; i < 5; i++) {
  for (j = 0; j < i + 1; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("</div>"); */
//--------------------------------------------
/* document.write('<div class="star">');
var i, j;
for (i = 0; i < 5; i++) {
  for (j = 4; j > i; j--) {
    document.write("&nbsp");
  }
  for (j = 0; j < i + 1; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("</div>"); */
//-------------------------------------------
/* document.write('<div class="star">');
var i, j;
for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    if (i + j < 4) {
      document.write("&nbsp");
    } else {
      document.write("*");
    }
  }
  document.write("<br>");
}
document.write("</div>"); */

//--------------------------------실습6.

//1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
var x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}

//2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
var str = "";
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    str = str + i;
  }
}
console.log(str);

//4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (var i = 9; i > -1; i--) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

//5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
var i = 0;
while (i < 10) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

//6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var i = 9;
while (i > -1) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i--;
}

//7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
var sum = 0;
for (var i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log(sum);

//8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
var sum = 0;
for (var i = 1; i < 20; i++) {
  if (i % 2 != 0 && i % 3 != 0) {
    sum = sum + i;
  }
}
console.log(sum);

//9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var sum = 0;
for (var i = 1; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    sum = sum + i;
  }
}
console.log(sum);
