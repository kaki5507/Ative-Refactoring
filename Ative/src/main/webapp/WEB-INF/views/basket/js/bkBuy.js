/*----------------------------우편번호 카카오 API----------------------------*/
function order_daumPostcode() {
    new daum.Postcode({ //다음 우편번호 찾기 객체(?) 생성
        oncomplete: function(data) { //팝업에서 검색결과를 누르면 팝업 나오게 하는 함수
        
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수 - 처음에 공백
            var extraAddr = ''; // 참고항목 변수 - 처음에 공백

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("order_extraAddress").value = extraAddr;
            
            } else {
                document.getElementById("order_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('order_postcode').value = data.zonecode;
            document.getElementById("order_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("order_detailAddress").focus();
        }
    }).open();
}
/*----------------------------//우편번호 카카오 API----------------------------*/



$(document).ready(function(){
    $('.pchk').on('click',function(){
        var pCheck = $('.pchk:checked').val();
        if(pCheck == "payco"){
            $(".guide-info").find("span").hide();
            $(".guide-info").children("span").eq(0).show();
        }else if(pCheck == "credit"){
            $(".guide-info").find("span").hide();
            $(".guide-info").children("span").eq(1).show();
        }else if(pCheck == "va"){
            $(".guide-info").find("span").hide();
            $(".guide-info").children("span").eq(2).show();
        }else if(pCheck == "kakao"){
            $(".guide-info").find("span").hide();
            $(".guide-info").children("span").eq(3).show();
        }else if(pCheck == "tel"){
            $(".guide-info").find("span").hide();
            $(".guide-info").children("span").eq(4).show();
        }else{
            return false;
        }
    });
});




