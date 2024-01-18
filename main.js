// Hamburger menu
//$(document).ready(function(){});
//click(function(){});
//scroll(function(){});

$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.mainnav').toggleClass('open');
        $('.hamburger').toggleClass('fa-times');
    });
//    $(window).scroll(function(){
//        $('.mainnav').removeClass('open');
//        $('.hamburger').removeClass('fa-times');
//        event.preventDefault();
//    });
});