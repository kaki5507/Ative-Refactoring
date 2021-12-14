/*--------생년월일--------*/
$(document).ready(function(){ //준비 되기전에 함수 실행
    birthDate(); //birthDate 함수 실행

    $(function(){
        $(document).ready(function(){
            $("select[name=select_Email]").change(function(){
                if($(this).val()=="1"){
                    $("#userEmail02").val("");
                } else{
                    $("#userEmail02").val($(this).val());
                    $("#userEmail02").attr("readyonly",true);
                }
            });
        })
    })
});

function birthDate(){ 
    var dt = new Date(); //날짜함수 (요일,월,일 등등 가져옴)
    var nowYear = dt.getFullYear(); //getFullyear < 주어진 날짜의 현지시간 기준 연도 반환
    $("#birthYY").append("<option value=''>년도</option>"); //option 년도 추가함
    var i,j,k; //변수 i,j,k 선언
    for(i = (nowYear-100); i <= (nowYear); i++){ //반복문실행 지금부터 100년전 ~ 오늘날까지 ++
        $("#birthYY").append("<option value='"+i+"'>"+i+"년"+"</option>"); 
    }
    $("#birthMM").append("<option value=''>월</option>");
    for(j = 1; j <= 12; j++){
        $("#birthMM").append("<option value='"+j+"'>"+j+"월"+"</option>");
    }
    $("#birthDD").append("<option value=''>일</option>");
    for(k = 1; k <= 31; k++){
        $("#birthDD").append("<option value='"+k+"'>"+k+"일"+"</option>");
    }
}
/*--------//생년월일--------*/

var emailCheck1;//이메일 앞부분
var emailCheck2;//이메일 뒷부분
var okem = false;//ok email 중복확인 false 상태
/*--------이메일 중복확인--------*/
function emailRequire(){
    var email1 =["scott","SCOTT"]; //scott 안됨
    var email2 =["naver.com"] //scott naver로 가입되어있음
    emailCheck1 = document.getElementById("userEmail01").value;
    emailCheck2 = document.getElementById("userEmail02").value;

    var email1Exp = /[-_.+a-zA-Z0-9]/; // 이메일 앞부분 정규식 -_. 을 쓰는사람도 있음
    var email2Exp = /[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/;
    //2020-06-05 이메일값이 두번째에 빈걸 못잡아냄..★ 밑에 회원가입 할때도 이메일 안잡힘
    if (emailCheck1 == email1[0] || emailCheck1 == email1[1] && emailCheck2 == email2[0]){ //emailCheck1,2 가 scott(@)naver.com/SCOTT@naver.com 안됨
       alert(emailCheck1+"@"+emailCheck2 + "은 이미 사용중인 계정입니다.");
       document.getElementById("userEmail01").focus();
        okem=false;
    }else if(emailCheck1 == "" || emailCheck2 == ""){
        alert("이메일 값이 비었습니다.");
        okem=false;
    }else if(!email1Exp.test(emailCheck1)){
        alert("이메일 형식이 올바르지 않습니다.")
        document.getElementById("userEmail01").focus();
        return false;
    }else if(!email2Exp.test(emailCheck2)){
        alert("이메일 형식이 올바르지 않습니다.")
        document.getElementById("userEmail02").focus();
        return false;
    }else {
        alert(emailCheck1+"@"+emailCheck2+"는 사용가능한 이메일 입니다.");
        document.getElementById("userTel").focus();
        okem=true;
    }
}


var idCheck;//아이디
var okid = false;//ok id 중복확인 false 상태
/*--------//이메일 중복확인--------*/
/*--------아이디 중복확인--------*/
function idRequire(){
    var users =["scott","SCOTT"]; //scott 안됨
    idCheck = document.getElementById("userId").value;

    if (idCheck == users[0] || idCheck == users[1]){ //idCheck 가 scott,SCOTT 일 경우
       alert(idCheck + "은 이미 사용중인 계정입니다.");
       document.getElementById("userId").focus();
        okid=false;
    }else if( idCheck == ""){
        okid=false;
        alert("아이디 값이 비었습니다.");
        document.getElementById("userId").focus();
    }else {
        alert(idCheck +"는 사용가능한 아이디 입니다.");
        document.getElementById("userPwd").focus();
        okid=true;
    }
}
/*--------//아이디 중복확인--------*/


/*--------이메일 selected 진행중--------*/
var sele;//전역변수
function selectEmail(){
    sele = document.getElementById("select_Email").value;
    // var seletext = sele.options[sele.selectedIndex].value;
    if(sele == '0'){
        document.getElementById("userEmail02").disabled = true;
    }else{
        document.getElementById("userEmail02").disabled = false;
    }
}
/*--------//이메일 selected--------*/



//-----------joinclear 회원가입 하기위함----------//
function joinclear(){
    //userId 뜨게하기 위함.
    idCheck = document.getElementById("userId").value;

    if(!idpwdTelCheck()){
    return false;
    }else{//필수항목 검사 후 중복검사 후 완료시 회원가입 진행
        alert(idCheck+"님 회원 가입을 축하합니다.");
        return location.href="/register/regCp.html";
    }
}
//-----------//joinclear----------//


var okipwd = false; //아이디 비밀번호 중복 false 상태
//--------------userId + userPwd + userTel 확인--------------//
function idpwdTelCheck(){
    idCheck = document.getElementById("userId").value;        //위에서 전역변수 선언했음
    var nameCheck = document.getElementById("userName").value;//이름
    var pwdCheck = document.getElementById("userPwd").value;  //비밀번호
    var pwdRCheck = document.getElementById("userPwdR").value;//비밀번호재확인
    var telCheck = document.getElementById("userTel").value;  //핸드폰
    var conCheck = document.getElementById("userCon").value;  //인증번호
    var yyCheck = document.getElementById("birthYY").value;   //년도
    var mmCheck = document.getElementById("birthMM").value;   //월
    var ddCheck = document.getElementById("birthDD").value;   //일
    email01Check = document.getElementById("userEmail01").value //이메일 앞부분
    email02Check = document.getElementById("userEmail02").value //이메일 뒷부분

    var idExp = /^[A-Za-z0-9]{4,20}$/;       //[A-Z]대문자 A~Z까지 , [a-z]소문자 a~z까지,[0-9]숫자 0~9까지 
    var pwdExp =  /^[A-Za-z0-9]{6,30}$/;     // + 는 대/소 영문자,숫자가 한번 이상 , {4,30}$/; 4자이상,30자 이하의 문자열 pwd 6자이상
    var nameExp=  /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,6}$/;      //한글 정규식
    var telExp = /^\d{3}-\d{3,4}-\d{4}$/;    //핸드폰 번호 정규식
    if(!okid){
        alert("아이디 중복 확인을 하지 않으셨습니다\n아이디 중복 확인 후 회원가입이 가능합니다.");
        document.getElementById("btn_join").focus();
        return false;
    }else if(!idExp.test(idCheck)){
        alert("아이디를 4~30자의 영문 대소문자로만 입력해주세요.");
        document.getElementById("userId").focus();
        return false;
    }else if(pwdCheck ==""){
        alert("비밀번호 값을 입력하세요.");
        document.getElementById("userPwd").focus();
        return false;
    }else if(!pwdExp.test(pwdCheck)){
        alert("비밀번호를 6~30자 영문 대소문자로 입력해주세요.");
        document.getElementById("userPwd").focus();
        return false;
    }else if(pwdCheck!=pwdRCheck){
        alert("비밀번호와 비밀번호 재확인을 다시 입력 해주세요.");
        document.getElementById("userPwd").focus();
        return false;
    }else if(idCheck==pwdCheck){
        alert("아이디와 비밀번호는 동일할 수 없습니다.");
        return false;
    }else if(nameCheck ==""){
        alert("이름을 입력하세요.");
        document.getElementById("userName").focus();
        return false;
    }else if(!nameExp.test(nameCheck)){
        alert("이름을 한글로 입력하세요.");
        document.getElementById("userName").focus();
        return false;
    }else if(!okem){
        alert("이메일을 중복 확인하세요")
        return false;
    }else if(telCheck==""){
        alert("휴대폰 번호를 입력해주세요.");
        document.getElementById("userTel").focus();
        return false;
    }else if(!telExp.test(telCheck)){
        alert("휴대폰 번호는 XXX-XXXX-XXXX 형식으로 입력해주세요.");
        document.getElementById("userTel").focus();
        return false;
    }else if(conCheck!=randomNum){
        alert("인증번호가 일치하지 않습니다.");
        document.getElementById("userCon").focus();
        return false;
    }else if(yyCheck ==""){
        alert("태어난 년도를 선택해주세요.")
        document.getElementById("birthYY").focus();
        return false;
    }else if(mmCheck ==""){
        alert("태어난 월을 선택해주세요.")
        document.getElementById("birthMM").focus();
        return false;
    }else if(ddCheck ==""){
        alert("태어난 일을 선택해주세요.")
        document.getElementById("birthDD").focus();
        return false;
    }
    else{
        return true;
    }

}
//--------------//userId + userPwd + userTel 확인--------------//


//-------------인증번호-------------//
var randomNum;//전역변수를 지역변수로,함수 안에서 사용할때 var를 빼야 사용가능

function verinum(){
    randomNum = Math.floor(Math.random()*1000000)+100000;//랜덤난수에 1000000곱함 이러면 6자리가 될려면 1000000더해야함


    if(randomNum>1000000){randomNum = randomNum - 100000;}//1000000보다 클시에 -100000을 빼서 6자리 유지
    console.log(randomNum);
}
//-------------//인증번호-------------//