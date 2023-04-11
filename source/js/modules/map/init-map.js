const initMap = () => {
  const ymaps = window.ymaps;

  ymaps.ready(function () {
    let map = new ymaps.Map('map', {
      center: [59.93863106417265, 30.323036499999905],
      zoom: 16,
    },
    {
      searchControlProvider: 'yandex#search',
    });

    let Placemark = new ymaps.Placemark([59.93863106417265, 30.323036499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite/icon_pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22],
      iconContentOffset: [15, 15],
    });

    map.geoObjects.add(Placemark);
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('rulerControl'); // удаляем контрол правил
  });
};

export {initMap};
