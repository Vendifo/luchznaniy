$(function() {

    $('.burger, .nav__list  a').on('click', function (e) {
    e.preventDefault()
    $('.nav__list').toggleClass('header__hight__menu--open')
    })

    $(".nav__item a").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault()
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 100
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500)
    })
})