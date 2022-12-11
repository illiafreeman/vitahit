$(document).ready(function () {

    /*top menu toggle*/

    $('.header-menu__btn').click(function () {
        $('.header-navgroup').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#hamburger').toggleClass('open');
    });
    $('.menu').click(function () {
        $('.header-navgroup').removeClass('vis');
        $('body').removeClass('oh');
        $('#hamburger').removeClass('open');
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
        //autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
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
$(window).on("load", function () {

    new WOW().init();

});
$('.header-nav__link').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 10
    }, 1500, 'easeInOutExpo');
    remove_hash_from_url();
    $('.header-navgroup').removeClass('vis');
    $('body').removeClass('oh');
    $('#nav-icon4').removeClass('open');
    event.preventDefault();
    //remove_hash_from_url();
});
function remove_hash_from_url() {
    var uri = window.location.toString();

    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0,
            uri.indexOf("#"));

        window.history.replaceState({},
            document.title, clean_uri);
    }
}

if ($(window).width() > 1280) {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".move").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 400;
            const y = (window.innerHeight - event.pageY * position) / 100;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
}





