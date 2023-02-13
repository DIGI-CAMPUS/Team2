function login_check() {
  let id = document.getElementById("id");
  let pw = document.getElementById("pw");
  // console.log(id.value);
  // console.log(pw.value);

  if (id.value == "") {
    alert("아이디를 입력하세요");
    id.focus();
    return false;
  }
  if (pw.value == "") {
    alert("비밀번호를 입력하세요");
    pw.focus();
    return false;
  }
  if (id.value != "mcssss") {
    alert("아이디를 확인하세요");
    id.focus();
    return false;
  }
  if (pw.value != "1234") {
    alert("비밀번호를 확인하세요");
    pw.focus();
    return false;
  }
  location.href = "instagram.html";
}
