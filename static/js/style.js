var swiper = new Swiper(".mySwiper", {
//   effect: "cards",
//   cardsEffect: {
//     rotate: true,
//     slideShadows: false
//   },
  loop: true,
//   grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true
  },
});

$(document).ready(function () {
    var slide = function () {
        id_val = $('.swiper-slide-active').attr('id');
        $('#resume').find('h2').text(id_val)
    };
    setInterval(slide, 100);
});