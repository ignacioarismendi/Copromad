$(document).ready(function() {

    $(".faq-question").click(function() {
        let target = $(this).data('target');
        if ($(this).closest('.faq-card').hasClass('active')) {
            $(target).slideUp();
            $(this).closest('.faq-card').removeClass('active');
        } else {
            $('.faq-answer').slideUp();
            $('.faq-card').removeClass('active');
            $(target).slideDown();
            $(this).closest('.faq-card').addClass('active');
        }
    });

    function checkVisibility() {
        var windowHeight = $(window).height();
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + windowHeight;

        $('.fade-in-effect').each(function() {
            var elementHeight = $(this).outerHeight();
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + elementHeight;
            if (elementBottom >= windowTop && elementTop <= windowBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility();

    // Desplazamiento suave con ajuste para la altura del navbar
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));
        var navbarHeight = $('.navbar').outerHeight(); // Asume que tu navbar tiene la clase ".navbar"

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - navbarHeight
            }, 1000);
        }
    });

});




