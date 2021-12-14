var telCheck;   //휴대폰
var nameCheck;  //이름
var conCheck;   //인증번호
var pwdClear;   //비밀번호 찾기버튼
var telcount=0; //인증번호 카운트
/*----------------비밀번호 찾기----------------*/
function pwdfindjoin(){
    idCheck = document.getElementById("userId").value;
    telCheck = document.getElementById("userTel").value;
    conCheck = document.getElementById("userCon").value;
    pwdClear = document.getElementById("pwd-clear").value;
    var idExp = /^[A-Za-z0-9]{4,20}$/;      //아이디 정규식
    var telExp = /^\d{3}-\d{3,4}-\d{4}$/;   //휴대폰 정규식
    if(idCheck ==""){
        alert("아이디를 입력해주세요.")
        document.getElementById("userId").focus();
        return false;
    }else if(telCheck==""){
        alert("휴대폰 번호를 입력해주세요.")
        document.getElementById("userTel").focus();
        return false;
    }else if(!idExp.test(idCheck)){
        alert("아이디를 4~20글자 사이로 입력해주세요..")
        document.getElementById("userId").focus();
        return false;
    }else if(idCheck!="scott"){
        alert(idCheck+"으로 가입되어 있는 아이디가 존재하지 않습니다.")
        document.getElementById("userId").focus();
        return false;
    }else if(!telExp.test(telCheck)){
        alert("휴대폰 형식에 맞게 입력해 주세요.")
        document.getElementById("userId").focus();
        return false;
    }else if(idCheck !="scott" && telCheck !="010-5177-8264"){
        alert(idCheck+"으로 가입되어있는 회원이 존재하지 않습니다.")
        document.getElementById("userId").focus();
        return false;
    }else if(idCheck=="scott" && telCheck != "010-5177-8264"){
        alert("휴대폰 번호는 XXX-XXXX-XXXX 형식으로 입력해주세요.")
        document.getElementById("userTel").focus();
        return false;
    }else if(!idCheck=="scott" && telCheck == "010-5177-8264"){
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
            document.getElementById("pwdClear").disabled = "true"; //pwdClear 막힘
            return false;
        }
        telcount++ //카운트 1 올라감 0 에서 1 그래서 4가 되면 5회임
        alert("인증번호가 "+telcount+"회 틀렸습니다.\n5회 틀리면 인증을 진행할 수 없습니다.다시 확인해주세요");
        document.getElementById("userCon").focus(); // 다시 인증하게 포커스 맞춰줌
        return false;
    }else
        alert("인증완료.\nid메일을 확인해주세요.")
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