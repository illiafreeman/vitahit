$(document).ready(function () {

    /*top menu toggle*/

    $('.header__btn').click(function () {
        $(this).toggleClass('close');
        $('.nav').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#hamburger').toggleClass('open');
        $('li.vis').removeClass('vis');
    });
    
    $('.nav > li > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent('li').toggleClass('vis');
    });
    $('.nav > li > ul > li> a').on('click', function (e) {
        e.preventDefault();
        $(this).parent('li').toggleClass('vis');
    });
    $('.nav__back').on('click', function (e) {
        e.preventDefault();
        $(this).parent('ul').parent('li').removeClass('vis');
    });
    /*end top menu toggle*/

    /*scroll to top*/
    var scrollTop = $(".scroll-top");
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 700) {
            $(scrollTop).addClass('vis');
        } else {
            $(scrollTop).removeClass('vis');
        }
    });
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*end scroll to top*/
    $('#slick_1').slick({
        slidesToShow: 1,
        dots: false,
        adaptiveHeight: true,
        //autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    });
    $('.intro__nav_next').click(function() {
        $('#slick_1').slick('slickNext');
    });
    $('.intro__nav_prev').click(function() {
        $('#slick_1').slick('slickPrev');
    });



    $('#slick_2').slick({     
        slidesToShow: 3,
        dots: false,
        arrows: false,
        centerMode: false,
        variableWidth: false,
        infinite: false,
        focusOnSelect: false,
        adaptiveHeight: true,

        responsive: [
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    infinite: true,
                    focusOnSelect: true,
                }
            }                  
        ]
    });
});








