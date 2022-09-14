"use strict";

// swiper
var swiper = new Swiper(".pgLgSwiper", {
  // 自動輪播
  // autoplay: {
  //   disableOnInteraction: false,
  //   delay: 0,
  // },
  loop: false,
  speed: 3000,
  spaceBetween: 16,
  slidesPerView: 3,
  observer: true,
  observerParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // RWD
  breakpoints: {
    380: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 1
    }
  }
}); // feedBack Swiper

var feedBackSwiper = new Swiper('.feedBackSwiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=all.js.map
