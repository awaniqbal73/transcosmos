///Slick Item//

$(document).ready(function () {
    $('.banner-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.years-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        asNavFor: '.years-nav'
    });
    $('.years-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.years-for',
        dots: true,
        centerMode: false,
        arrows:false,
        autoplay: false,
        focusOnSelect: true
    });
});


//End Slick Item
///

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $("#navigation-scroll").addClass("whitekHeader");
    } else {

        $("#navigation-scroll").removeClass().attr("class", ("whiteHeader"));
        $("#navigation-scroll").addClass().attr("class", ("section-navigation"));
    }

});


$(document).ready(function(){
    $(".box-mobile").click(function(){
        $(".navigation ul").css({"left": "0px"});
        $(".box-mobile").css({"display": "none"});
        $(".box-mobile-close").css({"display": "block"});
    });
    $(".box-mobile-close").click(function(){
        $(".navigation ul").css({"left": "-500px"});
        $(".box-mobile").css({"display": "block"});
        $(".box-mobile-close").css({"display": "none"});
    });
});
