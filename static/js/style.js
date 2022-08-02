// SwiperJS configuration
$(window).on('load', function() {
  var swiper = new Swiper(".mySwiper", {
    //   effect: "cards",
    //   cardsEffect: {
    //     rotate: true,
    //     slideShadows: false
    //   },
    // loop: true,
    //   grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#right-nav',
      prevEl: '#left-nav',
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
        $('#resume').find('#left-nav').text((typeof $('.swiper-slide-prev').attr('id') === "undefined" ? '' : '🠠 ' + $('.swiper-slide-prev').attr('id')))
        $('#resume').find('#right-nav').text((typeof $('.swiper-slide-next').attr('id') === "undefined" ? '' : $('.swiper-slide-next').attr('id') + ' ➝'))

    };
    setInterval(slide, 100);
});

document.getElementById("article-list").addEventListener("mousewheel", function() {
  $(this).removeClass('hidden-scroll')
  $(this).addClass('show-scroll');
  setTimeout(function() {
    $('#article-list').removeClass('show-scroll');
    $('#article-list').addClass('hidden-scroll');
  }, 1000)
});

document.getElementById("blog-list").addEventListener("mousewheel", function() {
  $(this).removeClass('hidden-scroll')
  $(this).addClass('show-scroll');
  setTimeout(function() {
    $('#blog-list').removeClass('show-scroll');
    $('#blog-list').addClass('hidden-scroll');
  }, 1000)
});

