$(document).ready(function(){
    $(".free-list").find("a").prepend("<strong>[ 자유게시판 ] </strong>");//추가 자유게시판
    $(".fashion-list").find("a").prepend("<strong>[ 패션게시판 ] </strong>");
    $(".qna-list").find("a").prepend("<strong>[ 질문과답변 ]</strong>");

    $('.counter').counterUp(); // 제이쿼리 카운터 업
   
});