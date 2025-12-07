// Покраска всех карточек и сброска цвета
const productCards = document.querySelectorAll('.product-card');
const changeColorAllButton = document.querySelector('#change-color-all-card');
const changeAllCardsColor = 'Поменять цвет всех карточек';
const resetAllCardsColor = 'Сбросить цвет всех карточек'
const colorChange = 'color-change';

changeColorAllButton.addEventListener('click', () => {
 productCards.forEach((card) => card.classList.toggle('bg-green'));
 productCards.forEach((card) => card.classList.toggle(colorChange));
 if (productCards[1].classList.contains(colorChange)) {
    changeColorAllButton.innerText = resetAllCardsColor;
  } else {
    changeColorAllButton.innerText = changeAllCardsColor;
    changeColorFirstCardButton.innerText = changeFirstCardColor;
    productCards.forEach((card) => card.classList.remove('bg-red','bg-green',colorChangeForFirstCard))
  }
})

// Покраска первой карточки и сброска цвета

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.getElementById('change-color-first-card');
const resetFirstCardColor = 'Сбросить цвет первой карточки';
const changeFirstCardColor = 'Поменять цвет первой карточки'
const colorChangeForFirstCard = 'color-change-first-card';

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.classList.toggle('bg-red');
  firstProductCard.classList.toggle(colorChangeForFirstCard);
  if (firstProductCard.classList.contains(colorChangeForFirstCard)) {
    changeColorFirstCardButton.innerText = resetFirstCardColor;
  } else {
    changeColorFirstCardButton.innerText = changeFirstCardColor;
  }
})

// Открыть гугл
const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer==true) {
    window.open('https://google.com');
  } else {
    return;
  }
}

// Вывод  консоль лог

const outputConsoleLogButton = document.querySelector('#output-console-log');

outputConsoleLogButton.addEventListener('click' , () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Вывод консоль лог при наведении на главный заголовок

const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
})

// Смена цвета кнопки

const toggleColorButton = document.getElementById('toggle-color-for-button');

toggleColorButton.addEventListener('click', () => {
  if (toggleColorButton.classList.contains('bg-blue')) {
    toggleColorButton.classList.toggle('bg-red');
  } else {
    toggleColorButton.classList.toggle('bg-blue');
  }
  })