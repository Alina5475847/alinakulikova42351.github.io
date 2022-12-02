$(document).ready(function() {
    $('.spoiler__item-title-header').on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});