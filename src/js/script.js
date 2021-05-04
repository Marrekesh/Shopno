jQuery(document).ready(function($) {
    $('.about__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        dots:true,
        variableWidth: true
    });

    $(".about__slider .about__slide").on("click", function() {
        const index = $(this).attr("data-slick-index");
        $(".about__slider").slick("slickGoTo", index);
      });
})