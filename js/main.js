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

let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom_visible");
  document.querySelector("body").classList.toggle("scroll-hidden");
});

// Отправка данных на сервер
function send(event, php) {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response); // Ебанный internet explorer 11
      console.log(json);

      // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
      if (json.result == "success") {
        // Если сообщение отправлено
        alert("Сообщение отправлено");
      } else {
        // Если произошла ошибка
        alert("Ошибка. Сообщение не отправлено");
      }
      // Если не удалось связаться с php файлом
    } else { alert("Ошибка сервера. Номер: " + req.status); }
  };

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () { alert("Ошибка отправки запроса"); };
  req.send(new FormData(event.target));
}