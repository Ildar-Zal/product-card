import { Modal } from "./Modal.js";
import { RegistrationForm } from "./RegistrationForm.js";
import { SubscribeForm } from "./SubscribeForm.js";
import { displayProductCards } from "../homework-8.js";
import { Cat } from "./Cat.js";
import { Dog } from "./Dog.js";

displayProductCards();

//1. При нажатии Подписаться выводим объект в консоль

const subscribeForm = new SubscribeForm('subscribe-form');

//2. Реализовал регистрационную форму, при регистрации из формы отправляется объект с данными введенными при регистрации

const regForm = new RegistrationForm('registration-form');
const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', () => {
  regForm.resetInput();
})

//3.Реализовал кнопку аутентификации при её нажатии открывается модальное окно, если пользователь зарегистрирован

const authButton = document.querySelector('#auth-button');
const modal = new Modal('modal', regForm);

authButton.addEventListener('click', () => {
  if (!regForm.getData()) {
    alert('Вы не зарегистрировались');
    return;
  }
  modal.show();
});

const closeModalButton = document.querySelector('#cross-exit');

closeModalButton.addEventListener('click', () => {
  modal.close();
});

const cat = new Cat('Барсик', 'Черный', 5, 100, true);
const dog = new Dog('Бобик', 'Белый', 10, 200, true);

console.log(`Здоровье кота: ${cat.health} и Здоровье собаки: ${dog.health}`);
cat.bite(dog);
dog.makeSound();
console.log(`Здоровье кота: ${cat.health} и Здоровье собаки: ${dog.health}`);
dog.eat();
dog.bite(cat);
console.log(`Здоровье кота: ${cat.health} и Здоровье собаки: ${dog.health}`);
cat.makeSound();
cat.eat();
console.log(`Здоровье кота: ${cat.health} и Здоровье собаки: ${dog.health}`);
dog.sleep();
cat.sleep();