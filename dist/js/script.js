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

    
    function toggleSlide(item) {
        $(item).each(function(i){
            if(item ==='.services__item-toggle') {
               $(this).on('click', function(e){
                    e.preventDefault();
                    $('.services__item-content').eq(i).removeClass('services__item-content_active');
                    $('.services__switch').eq(i).toggleClass('services__switch_active');
                    $('.services__item').toggleClass('.services__item_dis');
                    // $('.services__item').eq(i).fadeOut();
                    // $('.services__item-content').eq(i).fadeOut();
                    // $('.services__switch').eq(i).fadeIn(200);
                    
                    
                }); 
            } else {
                $(this).on('click', function(e){
                    e.preventDefault();
                    $('.services__switch').eq(i).removeClass('services__switch_active');
                    $('.services__item-content').eq(i).toggleClass('services__item-content_active');
                    
                    // $('.services__item').eq(i).fadeIn(200);
                    // $('.services__switch').eq(i).fadeOut();
                }); 
            }
        });
    };

    toggleSlide('.services__item-toggle');
    toggleSlide('.services__switch-close');

})