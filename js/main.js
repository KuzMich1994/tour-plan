var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button_next",
    prevEl: ".slider-button_prev",
  },
  keyboard: {
    enabled: true,
    onlyInVievport: false,
    pageUpDown: true,
  },
});
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [38.427002, 27.13985],
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    myGeoObject = new ymaps.GeoObject({
      preset: "islands#blackStretchyIcon",
      draggable: true,
    }),
    myPieChart = new ymaps.Placemark([38.427002, 27.13985]);

  myMap.geoObjects
    .add(myGeoObject)
    .add(myPieChart)
    .add(
      new ymaps.Placemark(
        [38.427002, 27.13985],
        {
          balloonContent:
            "Турция, Измир, Конак, махалле Исмет Каптан, улица 1373, 5 • İsmet Kaptan Mh. Sair Esref Blv 1373. Sk No:5",
          iconCaption: "DoubleTree by Hilton Hotel Izmir - Alsancak",
        },
        {
          preset: "islands#greenDotIconWithCaption",
        }
      )
    );
}
