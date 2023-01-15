/* Swiper */

const swiper = new Swiper('.slider', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass +'"> </span>' + '/' + '<span class="' + totalClass +'"> </span>'
        }
    },

    autoplay: {
        delay: 4000,
    },

    allowTouchMove: false,
    loop: true,
});

/* Dropdown */

document.querySelector('.catalog__dropdown-btn').addEventListener('click', function() {
    document.querySelector('.catalog__dropdown-block').classList.toggle('catalog__dropdown-block--visible');
    this.classList.toggle('catalog__dropdown-btn--active');
});

document.querySelectorAll('.catalog__dropdown-word').forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.catalog__dropdown-btn').innerHTML = this.innerHTML;
        document.querySelector('.catalog__dropdown-btn').focus();
        document.querySelector('.catalog__dropdown-block').classList.remove('catalog__dropdown-block--visible');
        document.querySelector('.catalog__dropdown-btn').classList.remove('catalog__dropdown-btn--active');
    });
});

document.querySelector('.footer__btn').addEventListener('click', function() {
    document.querySelector('.footer__dropdown-list').classList.toggle('footer__dropdown-list--visible');
    this.classList.toggle('footer__btn--active');
    document.querySelector('.footer__dropdown').classList.toggle('footer__dropdown--active');
});

document.querySelectorAll('.footer__dropdown-link').forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        document.querySelector('.footer__btn').innerHTML = this.innerHTML;
        document.querySelector('.footer__btn').focus();
        document.querySelector('.footer__dropdown-list').classList.remove('footer__dropdown-list--visible');
        document.querySelector('.footer__btn').classList.remove('footer__btn--active');
    });
});

$(document).ready(function() {
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".footer__dropdown").length) {
            $('.footer__dropdown-list').removeClass('footer__dropdown-list--visible');
        }
        e.stopPropagation();
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".catalog__dropdown").length) {
            $('.catalog__dropdown-block').removeClass('catalog__dropdown-block--visible');
        }
        e.stopPropagation();
    });
    
    $('.footer__pay-title').on('click', function() {
        $(this).next().slideToggle(300);
        $(this).toggleClass('active');
    });
});