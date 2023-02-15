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

// 더블 클릭 시 빈 하트가 꽉찬 하트로 변경

function like() {
  var function_icons= document.querySelector(".function_icons img");
  if (function_icons.src ==="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"){
    function_icons.src= "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
  } else {
    function_icons.src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"
  }
}    