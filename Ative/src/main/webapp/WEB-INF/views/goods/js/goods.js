
/* 할인된 % 자동으로 계산해서 할인가 나오게 할인가격이 비어 있으면 display none으로 아예 없었던 것 처럼 */
/* 전역 변수 */
/*
var ogMoney;     //원래 가격
var saleMoney;   //할인된 가격
var saleRatio;   //할인률 처음에 0으로 초기화
var salePrice;   //할인가 클래스

saleMoney=document.getElementsByClassName("saleMoney").value;
saleRatio=document.getElementsByClassName("saleRatio").value;
ogMoney=document.getElementsByClassName("ogMoney").value;
salePrice=document.getElementsByClassName("fa-caret-down").value;

if(saleRatio == null){
    document.getElementsByClassName("salePrice").style.display ="none";
    salePrice.style.display="none";
    return true;
}else if(0 < ogMoney && ogMoney < 100){
    saleMoney=ogMoney/saleRatio + ogMoney%saleRatio;
    return document.write(saleMoney+" %");
}else{
    true;
}
*/


/*
    ■■■■■■■■■■■ 야심작 별점 찍기 제이 쿼리 ■■■■■■■■■■■

$(document).ready(function(){
    $(".satisfaction").find("em")
    
var star = [5,4.5,4,3.5,3,2.5,2,1.5,1,0.5,0]; //별점

switch(star){
    case "5":
        document.write("<img src='./images/star/5star.png' alt='5점'>");
        break;
    case "4.5":
        document.write("<img src='./images/star/4.5star.png' alt='4.5점'>"); 
        break;
    case "4":
        document.write("<img src='./images/star/4star.png' alt='4점'>");
        break;
    case "3.5":
        document.write("<img src='./images/star/3.5star.png' alt='3.5점'>");
        break;        
    case "3":
        document.write("<img src='./images/star/3star.png' alt='3점'>"); 
        break;
    case "2.5":
        document.write("<img src='./images/star/2.5star.png' alt='2.5점'>");
        break;
    case "2":
        document.write("<img src='./images/star/2star.png' alt='2점'>");
        break;   
    case "1.5":
        document.write("<img src='./images/star/1.5star.png' alt='1.5점'>"); 
        break;
    case "1":
        document.write("<img src='./images/star/1star.png' alt='1점'>");
        break;
    case "0.5":
        document.write("<img src='./images/star/0.5star.png' alt='0.5점'>");
        break;           
    default:
        document.write("<img src='./images/star/0star.png' alt='0점'>");
        break;
}
});
*/

$(document).ready(function(){
    $(window).scroll(function(){ //윈도우에서 스크롤 실행됬을 때
        if($(this).scrollTop() > 1300){ //만약 스크롤 탑이 300보다 크면 내리면 숫자 점점 커짐
            $(".price-menu").addClass("price-menu-clone");
        }else
            $(".price-menu").removeClass("price-menu-clone"); //아니면 클래스 삭제
    });
});    