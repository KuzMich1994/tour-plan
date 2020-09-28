var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button_next",
    prevEl: ".hotel-slider__button_prev",
  },
  keyboard: {
    enabled: true,
    onlyInVievport: false,
    pageUpDown: true,
  },
  effect: "cube",
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button_next",
    prevEl: ".reviews-slider__button_prev",
  },
  keyboard: {
    enabled: true,
    onlyInVievport: false,
    pageUpDown: true,
  },
  autoHeight: true,
});