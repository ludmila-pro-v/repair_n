/*document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    };

    const closeModal = () => {
        modal.classList.remove('modal--visible');
    };
    
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);

    document.addEventListener('keydown', function(event) {
        const key = event.key; // const {key} = event; in ES6+
        if (key === "Escape") {
            closeModal();
        }
    });


});
*/

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        scrollup = $('.scrollup');

    modalBtn.on('click', function () {
        $(modal).toggleClass('modal--visible');
    });

    closeBtn.on('click', function () {
        $(modal).toggleClass('modal--visible');
    });

    var block_show = null;

    function scrollTracking() {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.design').offset().top;
        var eh = $('.design').outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show == null || block_show == false) {
                console.log('Блок active в области видимости');
                $(scrollup).addClass('scrollup--visible');
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                console.log('Блок active скрыт');
                $(scrollup).removeClass('scrollup--visible');
            }
            block_show = false;
        }
    }

    $(window).scroll(function () {
        scrollTracking();
    });

    $(document).ready(function () {
        scrollTracking();
    });

    $(function () {
        $(scrollup).bind('click', function (e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, 400);
        });
    });

    var mySwiper = new Swiper('.swiper-container', {

        loop: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');
    var nextWork = $('.swiper-button-next-work');
    var bulletsWork = $('.swiper-pagination-work');

    bullets.css('left', prev.width() + 10);
    next.css('left', prev.width() + 10 + bullets.width() + 10);
    bulletsWork.css('left', prev.width() + 10);
    nextWork.css('left', prev.width() + 10 + bulletsWork.width() + 10);

    new WOW().init(); 

});

// $(function(){
//     new WOW().init(); 
// });

var workNumbers = document.getElementsByClassName('work__number');
var workSteps = document.getElementsByClassName('work__step');

for (var i = 0; i < workNumbers.length; i++) {
    workNumbers[i].innerHTML = i + 1 + "/6";
    workSteps[i].setAttribute('id', '#workstep' + i);
}
