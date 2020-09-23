var mySwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },
  keyboard: {
    enabled: true,
    onlyInVievport: false,
    pageUpDown: true,
  },
  effect: 'cube',
})