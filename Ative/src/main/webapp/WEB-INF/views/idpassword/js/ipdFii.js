var telCheck;   //휴대폰
var nameCheck;  //이름
var conCheck;   //인증번호
var idClear;    //아이디 찾기버튼
var telcount=0; //인증번호 카운트
/*----------------아이디 찾기----------------*/
function idfindjoin(){
    nameCheck = document.getElementById("userName").value;
    telCheck = document.getElementById("userTel").value;
    conCheck = document.getElementById("userCon").value;
    idClear = document.getElementById("id-clear").value;
    var nameExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;     //한글 정규식
    var telExp = /^\d{3}-\d{3,4}-\d{4}$/;   //휴대폰 정규식
    if(nameCheck==""){
        alert("이름을 입력해주세요.")
        document.getElementById("userName").focus();
        return false;
    }else if(telCheck==""){
        alert("휴대폰 번호를 입력해주세요.")
        document.getElementById("userTel").focus();
        return false;
    }else if(!nameExp.test(nameCheck)){
        alert("이름을 한글로 입력해주세요.")
        document.getElementById("userName").focus();
        return false;
    }else if(nameCheck!="김승현"){
        alert(nameCheck+"으로 가입되어 있는 아이디가 존재하지 않습니다.")
        document.getElementById("userName").focus();
        return false;
    }else if(!telExp.test(telCheck)){
        alert("휴대폰 번호는 XXX-XXXX-XXXX 형식으로 입력해주세요.")
        document.getElementById("userName").focus();
        return false;
    }else if(nameCheck !="김승현" && telCheck !="010-5177-8264"){
        alert(nameCheck+"으로 가입되어있는 회원이 존재하지 않습니다.")
        document.getElementById("userName").focus();
        return false;
    }else if(nameCheck=="김승현" && telCheck != "010-5177-8264"){
        alert("휴대폰 번호가 일치하지 않습니다")
        document.getElementById("userTel").focus();
        return false;
    }else if(!nameCheck=="김승현" && telCheck == "010-5177-8264"){
        failchk()
        return false;
    }else if(conCheck==""){
        alert("인증번호를 입력해주세요")
        document.getElementById("userCon").focus();
        return false;
    }else if(conCheck!=randomTel){
        if(telcount==4){
            alert("인증이 실패되었습니다.");
            document.getElementById("userCon").disabled = "true"; //userCon 막힘
            document.getElementById("idClear").disabled = "true"; //idClear 막힘
            return false;
        }
        telcount++ //카운트 1 올라감 0 에서 1 그래서 4가 되면 5회임
        alert("인증번호가 "+telcount+"회 틀렸습니다.\n5회 틀리면 인증을 진행할 수 없습니다.다시 확인해주세요");
        document.getElementById("userCon").focus(); // 다시 인증하게 포커스 맞춰줌
        return false;
    }else
        alert("인증완료.\nid는 scott입니다")
        true;
}/*----------------아이디 찾기----------------*/

//----------------------인증번호-------------//
var randomTel;
function verinum(){
    randomTel = Math.floor(Math.random()*1000000)+100000;
    if(randomTel>1000000){randomTel = randomTel - 100000;}
    console.log(randomTel);
//----------------------인증번호 END-------------//
}