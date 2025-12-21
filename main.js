import { AuthForm } from "./homework-10/auth-form.js";
import { Modal } from "./homework-10/modal.js";
import { RegistrationForm } from "./homework-10/registration-form.js";
import { EmailForm } from "./homework-10/email-form.js";
import { displayProductCards } from "./homeworks/homework-8.js";

import './homeworks/homework-4.js'
import './homeworks/homework-5.js'
import './homeworks/homework-6.js'
import './homeworks/homework-7.js'
import './homeworks/homework-8.js'

displayProductCards();

//1. При нажатии Подписаться выводим объект в консоль

const subscribeForm = new EmailForm('subscribe-form');

//2. Реализовал регистрационную форму, при регистрации из формы отправляется объект с данными введенными при регистрации

const regForm = new RegistrationForm('registration-form');
const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', () => {
  regForm.resetField('name');
  console.log(regForm.isValidField('surname'));
})

//3.Реализовал кнопку аутентификации при её нажатии открывается модальное окно, если пользователь зарегистрирован

const authButton = document.querySelector('#auth-button');
const modal = new Modal('modal');

authButton.addEventListener('click', () => {
  if (!regForm.getData() || regForm.getData().password != regForm.getData().acceptPassword) {
    alert('Вы не зарегистрировались');
    console.log(`Модальное окно закрыто: ${modal.isOpen()}`)
    return;
  }
  modal.show();
  if (modal.isOpen()) {
    console.log(`Открыто модальное окно: ${modal.isOpen()}`)
  }
});

const closeModalButton = document.querySelector('#cross-exit');

closeModalButton.addEventListener('click', () => {
  modal.close();
});

const authForm = new AuthForm('auth-form', regForm);