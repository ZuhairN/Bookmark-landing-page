'use strict';

const menu = document.querySelector('.nav__menu-icon');
const nav = document.querySelector('.nav');
const tabs = document.querySelector('.features__tab');
const imgs = document.querySelectorAll('.illustration__img');
const contents = document.querySelectorAll('.illustration__intro');
const QList = document.querySelector('.FAQ__list');
const form = document.querySelector('.contact__form');
const error = document.querySelector('.contact__error');
const mailContainer = document.querySelector('.contact__email-container');
const eIcon = document.querySelector('.contact__error-icon');

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
      if (tab.parentElement === tabs.children[i]) {
        imgs[i].classList.add('active');
        contents[i].classList.add('active');
      } else if (
        tabs.children[i].getAttribute('class').indexOf('active') > -1
      ) {
        tabs.children[i].classList.remove('active');
        imgs[i].classList.remove('active');
        contents[i].classList.remove('active');
      }
    }
    tab.parentElement.classList.add('active');
    console.log(tab.parentElement);
  }
});

QList.addEventListener('click', (e) => {
  const q = e.target;
  if (q.getAttribute('class').indexOf('question') > -1) {
    q.parentElement.classList.toggle('active');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.elements.email;
  console.log(email);
  if (email.value === '') {
    email.setAttribute('placeholder', 'example@email/com');
    email.classList.add('empty');
    error.classList.add('active');
    error.textContent = 'Woops, make sure to add your email';
    eIcon.classList.add('active');
    mailContainer.classList.add('active');
  } else {
    email.classList.remove('empty');
    error.classList.remove('active');
    eIcon.classList.remove('active');
    mailContainer.classList.remove('active');
    email.value = '';
    email.setAttribute('placeholder', 'Enter your email address');
  }
});
