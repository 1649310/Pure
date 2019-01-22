$('.footer__title').on('click', function() {
    $(this).toggleClass('opened');
    $(this).next().toggleClass('opened'); return false;
});