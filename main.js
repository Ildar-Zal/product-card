// Покраска всех карточек и сброска цвета
const productCards = document.querySelectorAll('.product-card');
const changeColorAllButton = document.querySelector('#change-color-all-card');
const changeAllCardsColor = 'Поменять цвет всех карточек';
const changeFirstCardColor = 'Поменять цвет первой карточки'
const resetAllCardsColor = 'Сбросить цвет всех карточек'
const resetFirstCardColor = 'Сбросить цвет первой карточки'
const colorChange = 'color-change';

changeColorAllButton.addEventListener('click', () => {
 productCards.forEach((card) => card.classList.toggle('bg-green'));
 if (changeColorAllButton.innerText == changeAllCardsColor) {
    changeColorAllButton.innerText = resetAllCardsColor;
  } else {
    changeColorAllButton.innerText = changeAllCardsColor;
    productCards.forEach((card) => card.classList.remove('bg-red','bg-green'))
    changeColorFirstCardButton.innerText = changeFirstCardColor;
  }
})

// Покраска первой карточки и сброска цвета

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.getElementById('change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.classList.toggle('bg-red');
  if (firstProductCard.classList.contains(colorChange)) {
    changeColorFirstCardButton.innerText = changeFirstCardColor;
    firstProductCard.classList.remove(colorChange);
  } else {
    firstProductCard.classList.add(colorChange);
    changeColorFirstCardButton.innerText = resetFirstCardColor;
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

const changeColorForButton = document.getElementById('change-color-for-button');

changeColorForButton.addEventListener('click', () => {
  if (changeColorForButton.classList.contains('bg-blue')) {
    changeColorForButton.classList.toggle('bg-red');
  } else {
    changeColorForButton.classList.toggle('bg-blue');
  }
  })