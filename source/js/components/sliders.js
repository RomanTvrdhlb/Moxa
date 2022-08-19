import { auto } from '@popperjs/core';
import Swiper from '../vendor/swiper';


const swiper = new Swiper('.header-slider', {
  speed: 4000,
  spaceBetween: 94,
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 0,
  }
});

const swiper2 = new Swiper('.logo-slider', {
  
  grabCursor: true,
  speed:6000,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

});
