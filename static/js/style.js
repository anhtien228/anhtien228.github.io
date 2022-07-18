// SwiperJS configuration
$(window).on('load', function() {
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
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true
    },
  });
});

// Change RESUME header when slide
$(document).ready(function () {
    var slide = function () {
        id_val = $('.swiper-slide-active').attr('id');
        $('#resume').find('h2').text(id_val)
    };
    setInterval(slide, 100);
});

// Hide scrollbar effect (when not scrolling)
function removeFadeOut(el, speed) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 0;
  setTimeout(function() {
      el.parentNode.removeChild(el);
  }, speed);
}

// function debounce(func, timeout = 500){
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func.apply(this, args); }, timeout);
//   };
// }

// window.addEventListener("mousewheel", e => {
//   $('.')
// });

document.getElementById("projects-list").addEventListener("mousewheel", function() {
  $('#projects-list').removeClass('hidden-scroll')
  $('#projects-list').addClass('show-scroll');
  setTimeout(function() {
    $('#projects-list').removeClass('show-scroll');
    $('#projects-list').addClass('hidden-scroll');
  }, 1000)
});