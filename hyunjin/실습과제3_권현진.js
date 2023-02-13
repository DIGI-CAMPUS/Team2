var currentyear = 2023;
var birthyear;
var age;

birthyear = window.prompt ("태어난 연도를 입력하세요.");

if (birthyear < 1920 || birthyear > 2023 || birthyear == "" || birthyear == null) {
    alert("엉뚱한 답을 넣으셨구먼.. 결과는 기대하지 마시길ㅜ")
  }


else if(birthyear >= 1920 && birthyear <= 2023) {
    alert(birthyear + "년생들 사주가 그렇게 좋다더니..");
}
age = currentyear - birthyear + 1;
document.write(currentyear + "년 현재<br>");
document.write("<span style='color:blue;'>" + birthyear + "년</span>에 태어난 사람의 나이는<span style='color:blue;'>" + age + "세</span>입니다.");