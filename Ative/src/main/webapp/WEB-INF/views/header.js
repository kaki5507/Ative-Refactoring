$(document).ready(function(){
    $(".menu-utill > a:eq(2)").on("click",function(){
        $(".submenu-user").slideToggle({display:"block"});//안보여줬던거 보여줘야됨
        return false;//return false를 하면 a 태그가 넘어가는걸 막아줌
    });
    /*----------------------------TOP 버튼----------------------------*/
    $(window).scroll(function(){ //윈도우에서 스크롤 실행됬을 때
        if($(this).scrollTop() > 300){ //만약 스크롤 탑이 300보다 크면 내리면 숫자 점점 커짐
            $(".btn_top").fadeIn(); //btn_top 을 서서히 보여줌
        }else{
            $(".btn_top").fadeOut();
        }
    });
    
    $(".btn_top").click(function(){ //btn_top을 클릭했을때 함수
        $("html, body").animate({
            scrollTop : 0 //scrollTop이 0까지
        }, 500,"linear"); //5초 동안 , linear = 속도를 그대로 유지
        return false;
    });
    /*----------------------------//TOP 버튼----------------------------*/

    /*common.js를 분리해서 사용했음 이렇게 안하면 열려다 닫혔다를 반복하고 
      절대경로를 사용하지않으면갈수없다고 cannot 에러남*/
});    