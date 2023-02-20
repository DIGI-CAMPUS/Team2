
//유효기간 게시물 클릭시 alarm




//각 제목 mouseover 시 글씨색 파란색으로 및 한번 클릭했으면 파란색으로

$(".name").on({
  "mousevoer click" : function(){
    $(".name").parent().next()
    .css({"color":"blue","font-style":"bolder"});
  }
});

