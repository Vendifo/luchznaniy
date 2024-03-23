$(function() {
    $('.burger').on('click', function (e) {
        e.preventDefault(); // Отменяем стандартное действие ссылки
        $('.nav__list').toggleClass('nav__list--open'); // Переключаем класс для открытия/закрытия меню
        $('.burger__line--one').toggleClass('open'); // Переключаем класс для первой линии бургера
        $('.burger__line--two').toggleClass('open'); // Переключаем класс для второй линии бургера
        $('.burger__line--three').toggleClass('open'); // Переключаем класс для третьей линии бургера
    });

    $(".nav__item a").on("click", function (e) {
        e.preventDefault(); // Отменяем стандартное действие ссылки
        var id = $(this).attr('href'); // Получаем id элемента, на который ссылается якорь
        var top = $(id).offset().top - 100; // Вычисляем положение элемента относительно верха страницы
        $('body,html').animate({scrollTop: top}, 1500); // Плавно прокручиваем страницу к нужному элементу
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.burger').length && !$(e.target).closest('.nav__list').length) {
            // Если клик был вне бургера и меню, закрываем меню
            $('.nav__list').removeClass('nav__list--open');
            $('.burger__line--one').removeClass('open'); // Возвращаем первую линию в исходное состояние
            $('.burger__line--two').removeClass('open'); // Возвращаем вторую линию в исходное состояние
            $('.burger__line--three').removeClass('open'); // Возвращаем третью линию в исходное состояние
        }
    });
});
