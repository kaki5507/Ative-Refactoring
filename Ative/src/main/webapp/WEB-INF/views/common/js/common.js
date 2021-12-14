$(document).ready(function(){
    $("head").append('<link rel="shortcut icon" href="../common/images/Ative-short.png"; type="image/x-icon">');
    $("header").load("../header.html");
    $("footer").load("../footer.html");
    $(".paging").load("../paging.html");
    $("body").css({"overflow-x":"hidden"}); //가로 스크롤바 없애기 body에 강제적으로 style 적용
});    

/* 이용약관 */
function popupAgree(){ // a 태그 클릭했을때 함수 실행
    var popUrl = "http://127.0.0.1:5500/main/ativeAg.html";	//팝업창에 출력될 페이지 URL
    /*
        resizeable = 사이즈 변경 사용
        scrollbars = 스크롤 바 사용
        status = 하단 상태바 출력
        menubar = 메뉴바 속성
    */
	var popOption = "top=100 ,left=100 ,width=820, height=480, resizable=no, scrollbars=no, status=no, location=no;";    //팝업창 옵션(optoin)
	window.open(popUrl,"",popOption);
}
/* js를 한번에 불러오면서 js를 하나더 넣으면 오류남*/ 

/* 개인정보처리방침 */
function popupPrivacy(){
    var popUrl = "http://127.0.0.1:5500/main/ativePv.html";

	var popOption = "top=100 ,left=100 ,width=820, height=480, resizable=no, scrollbars=no, status=no, location=no;";    //팝업창 옵션(optoin)
	window.open(popUrl,"",popOption);
}