import {Burger} from './burger';
import {initLocomotiveScroll} from './init-locomotive-scroll';

window.addEventListener('DOMContentLoaded', () => {
  initLocomotiveScroll();

  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
  });
});
