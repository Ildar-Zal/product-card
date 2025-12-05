//1. При нажатии Подписаться выводим объект в консоль

const subscribeForm = document.querySelector('.subscribe-form');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

//2. Реализовал регистрационную форму, при регистрации из формы отправляется объект с данными введенными при регистрации

let registrationData;
const registrationForm = document.querySelector('#registration-form');

registrationForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  registrationData = Object.fromEntries(formData.entries());
  if (registrationData.acceptPassword != registrationData.password) {
    alert("Вы ввели несоответствующий пароль");
  }
  else {
    const date = new Date();
    registrationData.createdOn = date;
    console.log(registrationData);
    alert("Пользователь зарегистрирован!");
  }
});

//3.Реализовал кнопку аутентификации при её нажатии открывается модальное окно, если пользователь зарегистрирован

const authButton = document.querySelector('#auth-button');
const modal = document.querySelector('#modal');

authButton.addEventListener('click', () => {
  if (!registrationData) {
    alert('Вы не зарегистрировались');
    return;
  }
  modal.showModal();
});

const closeModalButton = document.querySelector('#cross-exit');

closeModalButton.addEventListener('click', () => {
  modal.close();
});

//4.В модальном окне реализовал проверку на соответствие логина и пароля из формы регистрации при нажатии кнопки Войти, 
//если вход успешен, то выводится новый объект в консоль, с новым свойством lastLogin

const modalForm = document.querySelector('#modal-form');

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const authLogin = data.authLogin;
  const authPassword = data.authPassword;
  const regPassword = registrationData.password;
  const regLogin = registrationData.login;
  if (regLogin != authLogin || regPassword != authPassword) {
    alert('Введен несоответствующий логин или пароль');
  }
  else {
    const date = new Date();
    const currentUser = {...registrationData, lastLogin:date};
    modal.close();
    alert('Пользователь авторизован успешно');
    console.log (currentUser);
  }
})