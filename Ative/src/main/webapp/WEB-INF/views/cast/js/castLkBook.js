$(document).ready(function(){
    $("#bx-wrap").bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 650,
        auto: true,
        controls: true
    });
    var slider = $("#slide_banner").bxSlider({
        mode : "horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:1000,
        slideMargin:50,
        minSlides:4,
        maxSlides:4,
        auto:true,
        autoHover:true,
        controls:false
    });
    
    $("#prevBtn").on("click",function(){
        slider.goToPrevSlide();
        return false; //앵커 태그 끊어줘야함
    });
    
    $("#nextBtn").on("click",function(){
        slider.goToNextSlide();
        return false;
    });
});