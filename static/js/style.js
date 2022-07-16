var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  cardsEffect: {
    rotate: false,
    slideShadows: false
  },
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true
  },
});