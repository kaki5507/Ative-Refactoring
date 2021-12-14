
var allchk = true; //변수 allchk 선언

function allCheck(){ //onclick 이벤트 발생
    if(allchk==false){ //allchk가 false 라면 agree_list.check 된것을 false 로 함
        for(var i=0; i<4; i++){
            document.agForm.agree_list[i].checked = false; //체크 된것 false
        }
        allchk=true; //allchk true로 바꿈
    }else if(allchk=true){ //true 이면
        for(var i=0; i<4; i++){
            document.agForm.agree_list[i].checked = true; //체크 된것 true
        }
        allchk=false; //allchk fase로 바꿈
    }
}

/*----필수 체크 조건----*/
function nextPage(){
    var tosCheck = document.getElementById("tos_check").checked;
    var ppCheck = document.getElementById("pp_check").checked;
    if( tosCheck && ppCheck){
        return "./regii.html";
    }
    else{
        alert("동의 항목(필수)는 반드시 체크하셔야 다음 단계로 넘어갑니다.");
        return "#";
    }                
}


/*----------jQuery----------*/
$(document).ready(function(){
    $(".check-title:eq(1)").click(function(){ //a태그 클릭시 함
        $(".chevron:eq(2)").show();
        $(".chevron:eq(3)").hide();
        $(".chevron:eq(4)").show();
        $(".chevron:eq(5)").hide();

        $(".check-info:eq(0)").slideToggle({display:"block"});
        $(".check-info:eq(1)").slideUp({display:"none"})// 나머지 위로올림
        $(".check-info:eq(2)").slideUp({display:"none"})
        // // $(this).css({display:'block'});//안보여줬던거 보여줘야됨 자기자신의 a 태그를 바꿔야함
        $(".chevron:eq(0)").toggle();
        $(".chevron:eq(1)").toggle();
        return false;//return false를 하면 a 태그가 넘어가는걸 막아줌
    });
    $(".check-title:eq(2)").click(function(){ //a태그 클릭시 함
        $(".chevron:eq(0)").show();
        $(".chevron:eq(1)").hide();
        $(".chevron:eq(4)").show();
        $(".chevron:eq(5)").hide();


        $(".check-info:eq(1)").slideToggle({display:"block"});
        $(".check-info:eq(0)").slideUp({display:"none"})
        $(".check-info:eq(2)").slideUp({display:"none"})
        $(".chevron:eq(2)").toggle();
        $(".chevron:eq(3)").toggle();
        return false;
    });
    $(".check-title:eq(3)").click(function(){ //a태그 클릭시 함
        $(".chevron:eq(0)").show();
        $(".chevron:eq(1)").hide();
        $(".chevron:eq(2)").show();
        $(".chevron:eq(3)").hide();

        $(".check-info:eq(2)").slideToggle({display:"block"});
        $(".check-info:eq(0)").slideUp({display:"none"})
        $(".check-info:eq(1)").slideUp({display:"none"})
        $(".chevron:eq(4)").toggle();
        $(".chevron:eq(5)").toggle();
        return false;
    });
});
