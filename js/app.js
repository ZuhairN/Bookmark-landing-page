'use strict';

const menu = document.querySelector('.nav__menu-icon');
const nav=document.querySelector('.nav');
const tabs = document.querySelector('.features__tab');
const tabsContent = document.querySelectorAll('.illustration__tab');
const QList = document.querySelector('.FAQ__list');

menu.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  if (menu.getAttribute('src').indexOf('hamb') > -1) {
    menu.setAttribute('src', './images/icon-close.svg');
  } else {
    menu.setAttribute('src', './images/icon-hamburger.svg');
  }
});

tabs.addEventListener('click', (e) => {
  e.preventDefault();
  const tab = e.target;
  let j;
  if (tab.tagName === 'A') {
    for (let i = 0; i < 3; i++) {
      if (tabs.children[i].getAttribute('class').indexOf('active') > -1) {
        tabs.children[i].classList.remove('features__list--active');
        tabsContent[i].classList.remove('illustration__tab--active');
      }
      if (tab.parentElement.getAttribute('class').indexOf(i + 1) > -1) {
        j = i;
      }
    }
    tab.parentElement.classList.add('features__list--active');
    tabsContent[j].classList.add('illustration__tab--active');
  }
});

QList.addEventListener('click', (e) => {
  const q = e.target;
  if (q.getAttribute('class').indexOf('question') > -1) {
    q.parentElement.classList.toggle('tab--active');
  }
});
