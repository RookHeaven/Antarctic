const myOwnScriptElement = document.createElement('script');
myOwnScriptElement.src = 'https://api-maps.yandex.ru/2.1/?apikey=de6f9a95-9c49-4623-ae0c-ce2ffdfc8922&lang=ru_RU';
const mapElement = document.querySelector('#map');
let switcher = false;
mapElement.style.display = 'block';

window.addEventListener('scroll', activateMapOnScroll);

function initYandexMap() {
  const ymaps = window.ymaps;
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
}

const insertApiToHead = () => {
  document.head.appendChild(myOwnScriptElement);
};

const initMap = () => {
  const ymaps = window.ymaps;
  ymaps.ready(initYandexMap);
};

function activateMapOnScroll() {
  if (mapElement.getBoundingClientRect().top - window.innerHeight < 2000 && !switcher) {
    switcher = true;
    insertApiToHead();
    myOwnScriptElement.addEventListener('load', () => {
      if (typeof ymaps !== 'undefined') {
        initMap();
      }
    });
    window.removeEventListener('scroll', activateMapOnScroll);
  }
}

export {activateMapOnScroll};
