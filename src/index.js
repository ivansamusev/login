import createLi from './js/renderHTMl';

import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const list = document.querySelector('.list');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  const markup = createLi(email.value, password.value);

  if (email.value === '' && password.value === '') {
    Notiflix.Notify.failure('Введіть будь ласка дані!');
    return;
  }
  if (email.value === '') {
    Notiflix.Notify.failure('Введіть будь ласка email!');
    return;
  }
  if (password.value === '') {
    Notiflix.Notify.failure('Введіть будь ласка password!');
    return;
  } else {
    Notiflix.Notify.success('Дякую!Вас додано у список!');
  }

  list.insertAdjacentHTML('beforeend', markup);

  e.currentTarget.reset();
}
