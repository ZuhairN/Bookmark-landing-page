'use strict';

const menu = document.querySelector('.nav__menu');
const hList = document.querySelector('.header__list');

menu.addEventListener('click', () => {
  menu.parentElement.parentElement.classList.toggle('active');
  if (menu.getAttribute('src').indexOf('hamb') > -1) {
    menu.setAttribute('src', './images/icon-close.svg');
  } else {
    menu.setAttribute('src', './images/icon-hamburger.svg');
  }
});
