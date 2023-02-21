
//유효기간 게시물 클릭시 modal

$(".outDated").click(function(){
  alert("유효기간이 경과하여 열람이 불가합니다.")
});


// modal 안내메세지, click 안에 투입함

// $( function(){
//   $( "#modal-confirm" ).dialog({
//     resizable: false,
//     height: "auto",
//     width: 400,
//     modal: true,
//     buttons: {
//       "돌아가기": function() {
//         $( this ).dialog( "close" );
//       },
//     }
//   });
// })



//각 제목 mouseover 시 글씨색 파란색으로 및 한번 클릭했으면 파란색으로


$(".title").not(".title:eq(0)").each(function(){
  $(this).on({"mouseover click": function(){
    $(this).css({"color":"blue","font-weight":"bold"});
    $(this).parent().css({"background-color":"lightgray"})
  }});

  $(this).on({"mouseout blur": function(){
    $(this).css({"color":"black","font-weight":"normal"});
    $(this).parent().css({"background-color":"white"})
  }});

})

// 작성일자별 조회 , datepicker 플러그인
$( function() {
  $( ".datepicker" ).datepicker();
});

// 첨부파일 , tootip 플러그인 

$( function() {
  $( document ).tooltip();
} );


// radio box 

$( function() {
  $( "input" ).checkboxradio({
    icon: false
  });
} );


