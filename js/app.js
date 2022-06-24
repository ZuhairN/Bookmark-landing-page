'use strict';

const menu = document.querySelector('.nav__menu-icon');
const nav = document.querySelector('.nav');
const tabs = document.querySelector('.features__tab');
const imgs = document.querySelectorAll('.illustration__img');
const contents = document.querySelectorAll('.illustration__content');
const QList = document.querySelector('.FAQ__list');

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (menu.getAttribute('src').indexOf('hamb') > -1) {
    menu.setAttribute('src', './images/icon-close.svg');
  } else {
    menu.setAttribute('src', './images/icon-hamburger.svg');
  }
});

tabs.addEventListener('click', (e) => {
  e.preventDefault();
  const tab = e.target;
  if (tab.tagName === 'A') {
    for (let i = 0; i < 3; i++) {
      if (tab.parentElement.getAttribute('class').indexOf(i + 1) > -1) {
        imgs[i].classList.add('active');
        contents[i].classList.add('active');
      } else if (
        tabs.children[i].getAttribute('class').indexOf('active') > -1
      ) {
        tabs.children[i].classList.remove('features__list--active');
        imgs[i].classList.remove('active');
        contents[i].classList.remove('active');
      }
    }
    tab.parentElement.classList.add('features__list--active');
  }
});

QList.addEventListener('click', (e) => {
  const q = e.target;
  if (q.getAttribute('class').indexOf('question') > -1) {
    q.parentElement.classList.toggle('tab--active');
  }
});
