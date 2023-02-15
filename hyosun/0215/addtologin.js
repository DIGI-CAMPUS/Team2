// // 배경색이 5초마다 바뀌기

// const myElement = document.querySelector('body');

// const gradientColors= [
//   'linear-gradient(to right, #000, #888)',
//   'linear-gradient(to right, #9b59b6, #3498db)',
//   'linear-gradient(to right, #1abc9c, #f39c12)'
// ];

// document.body.style.background = gradientColors[0];

// let i=0;

// setInterval( ()=> {
//   // myElement.style.background = gradientColors[i];
//   i = (i + 1) % gradientColors.length;
//   document.body.style.background = gradientColors[i];
// },5000);

// document.body.style.transition='background 1s ease';


// 스크롤 

function sTo() {
  scrollTo({top:0000,behavior:'smooth'}); //x좌표, y좌표
  //scrollTo(left : 100, top : 200); 
}
function sBy() {
  scrollBy({top:600,behavior:'smooth'}); //x좌표, y좌표
  //scrollTo(left : 100, top : 200); 
}



// 아이디, 비밀번호 일치 

const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
    if (id.value === 'minwoo') {
        if (password.value == '0101') {
            alert('welcome!')
            location.href="instagram.html"
        }
        else {
            alert('비밀번호를 다시 한 번 확인해주세요!')
            errStack ++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
        errStack ++;
    }

    if (errStack >= 5) {
        alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
    }
})



// // 배경색 그라데이션으로 바꾸기

// const element = document.querySelector('section');
// let hue = 0;

// function animateBackground() {
//   hue = (hue + 1)% 360;
//   const gradient = 'linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${hue + 60}, 100%, 50%)}';
//   element.style.background = gradient;
// }

// setInterval(animateBackground, 10);