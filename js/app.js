'use strict';

const menu = document.querySelector('.nav__menu-icon');
const nav = document.querySelector('.nav');
const tabs = document.querySelector('.features__tab');
const imgs = document.querySelectorAll('.illustration__img');
const contents = document.querySelectorAll('.illustration__intro');
const QList = document.querySelector('.FAQ__list');
const form = document.querySelector('.contact__form');
const trigger = document.querySelector('.contact__container');
const error = document.querySelector('.contact__error');

const regex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  if (email.value === '' || !regex.test(email.value)) {
    email.setAttribute('placeholder', 'example@email/com');
    trigger.classList.add('invalid');
    if (email.value === '') {
      error.textContent = "Woops, make sure it's not empty";
    } else {
      error.textContent = "Woops, make sure it's an email";
    }
  } else {
    email.setAttribute('placeholder', 'Enter your email address');
    trigger.classList.remove('invalid');
    error.textContent = 'Yippee, thanks for subscribing!';

    setTimeout(() => {
      trigger.classList.add('valid');
      setTimeout(() => {
        trigger.classList.remove('valid');
      }, 5000);
    }, 300);
    email.value = '';
  }
});
