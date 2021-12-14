var idCheck;
var pwdCheck;
var count = 0; //count를 0으로 함.
/*----------------로그인 함수----------------*/
function loginClear(){
    idCheck = document.getElementById("userId").value;
    pwdCheck = document.getElementById("userPwd").value;
    
    if (idCheck==""){
        alert("아이디를 입력해주세요.");
        document.getElementById("userId").focus();
        return false;
    }else if(pwdCheck==""){
        alert("비밀번호를 입력해주세요.");
        document.getElementById("userPwd").focus();
        return false;
    }else if(idCheck=="scott" && pwdCheck!="tiger"){//loginCall이라는 함수가 틀렸을때
        if(count==5){                               //만약 count가 5라면 실패 나오고
            alert("비밀번호가 5회 틀렸습니다.\n관리자에게 문의하세요.");
            document.getElementById("btn_join").style.background = "#ddd";
            document.getElementById("btn_join").disabled = "true"; //disabled를 true하게함.
            return false;
        }
        count++      //count가 1올라감
        alert("비밀번호가 "+count+"회 틀렸습니다.\n5회 틀리면 로그인 진행할 수 없습니다.");
        return false;
    }else if(idCheck!="scott"){
        alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.")
        document.getElementById("userId").focus();
    }else if(idCheck=="scott" && pwdCheck=="tiger"){
        alert(idCheck+"님께서 로그인하셨습니다.")
    }
    else
        true;
    }
/*----------------//로그인 함수----------------*/


