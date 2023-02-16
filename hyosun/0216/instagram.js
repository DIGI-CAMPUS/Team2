// 스토리 슬라이드

const container = document.querySelector('.stories');
const scrollLeftBtn = document.querySelector('#scrollLeft');
const scrollRightBtn = document.querySelector('#scrollRight');

scrollLeftBtn.addEventListener('click', function() {
  container.scrollBy({
    left: -64.4, // set to the number of pixels you want to scroll horizontally
    behavior: 'smooth' // set to 'auto' or 'instant' for different scroll behavior
  });
});

scrollRightBtn.addEventListener('click', function() {
  container.scrollBy({
    left: 64.4, // set to the number of pixels you want to scroll horizontally
    behavior: 'smooth' // set to 'auto' or 'instant' for different scroll behavior
  });
});

// 하트 클릭시 빈 하트가 꽉찬 하트로 변경
// function like() {
//   var function_icons= document.querySelector(".function_icons img");

//   if (function_icons.src ==="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"){
//     function_icons.src= "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
//   } else {
//     function_icons.src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"
//   }
// }    

// 게시글 내 이미지를 누를 때마다 좋아요가 n 개 증가
// const incrementBtn = document.querySelector('.post_image');
// const counter = document.querySelector('.counter');

// let count = 0;

// incrementBtn.addEventListener('click', ()=>{
// count++;
// counter.textContent = count;
// });


//***************************위의 두 기능 합체+(이미지더블클릭시 좋아요1증가)*****************************//

const incrementBtn = document.querySelector('.post_image');
const counter = document.querySelector('.counter');
let count = 0;

incrementBtn.addEventListener('dblclick', like)

function like() {
  var function_icons= document.querySelector(".function_icons img");

  if (function_icons.src ==="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"){
    function_icons.src= "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
    count--;
    counter.textContent = count;

  } else {
    function_icons.src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"
    count++;
    counter.textContent = count;
    
  }
}    


//***********************************************************************************//


// 댓글의 하트 클릭시 빈 하트가 꽉찬 하트로 변경

function litLike() {
  var function_icons= document.querySelector(".small_heart img");
  if (function_icons.src ==="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"){
    function_icons.src= "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
  } else {
    function_icons.src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"
  }
}    


// mouseover 마우스 오버 시 글자색이 변경 

let followColor = document.getElementsByClassName('follow');

console.log(followColor);
for ( let follow of followColor ) {

follow.addEventListener('mouseover', function() {
  follow.style.color = 'black';
});

follow.addEventListener('mouseout', function() {
  follow.style.color = 'blue';
});
}

// click 시 글 내용이 변경 (팔로우->팔로잉)


let follow2 = document.querySelectorAll('.follow');

console.log(follow2);

follow2.forEach(function(item) {
item.addEventListener('click', function() {
  // follow2.textContent = "팔로잉";
  if (item.textContent === "팔로잉" ) 
  item.textContent = "팔로우";
  else item.textContent = "팔로잉";
});
});

// 네브바 검색 시 모달

const searchButton = document.querySelector('.search-button');
console.log(searchButton);
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal-close');

searchButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});