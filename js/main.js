$(function() {
    $('.burger').on('click', function (e) {
        e.preventDefault(); 
        $('.nav__list').toggleClass('nav__list--open'); 
        $('.burger__line--one').toggleClass('open'); 
        $('.burger__line--two').toggleClass('open'); 
        $('.burger__line--three').toggleClass('open'); 
    });

    $(".nav__item a").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'); 
        var top = $(id).offset().top - 100; 
        $('body,html').animate({scrollTop: top}, 1500); 
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.burger').length && !$(e.target).closest('.nav__list').length) {
            $('.nav__list').removeClass('nav__list--open');
            $('.burger__line--one').removeClass('open'); 
            $('.burger__line--two').removeClass('open'); 
            $('.burger__line--three').removeClass('open'); 
        }
    });
});
