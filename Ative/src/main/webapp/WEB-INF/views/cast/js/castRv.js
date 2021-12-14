function popupOpen(){ // a 태그 클릭했을때 함수 실행
    var popUrl = "castRv-info.html";	//팝업창에 출력될 페이지 URL
    /*
        resizeable = 사이즈 변경 사용
        scrollbars = 스크롤 바 사용
        status = 하단 상태바 출력
        menubar = 메뉴바 속성
    */
	var popOption = "width=820, height=480, resizable=no, scrollbars=no, status=no, location=no;";    //팝업창 옵션(optoin)
	window.open(popUrl,"",popOption);
}
