// Покраска всех карточек
const productCards = document.querySelectorAll('.product-card');
const changeColorAllButton = document.querySelector('.button-change-color-all-card');
const redColorHash = '#FF0000'

changeColorAllButton.addEventListener('click',() => {
productCards.forEach((card) => card.style.backgroundColor = redColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('.button-change-color-first-card');
const blackColorHash = '#000000';

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blackColorHash;
})

// Сброс покраски с карточек

const resetColorAllCardButton = document.querySelector('.button-reset-color-all-card');
const originalColorHash = '#F7F7FA';

resetColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = originalColorHash);
})

// Открыть гугл

const openGoogleButton = document.querySelector('.button-open-google');

openGoogleButton.addEventListener ('click', () =>  openGoogle())

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer==true){
    window.open('https://google.com');
  }
  else{
    return;
  }
}

// Вывод  консоль лог

const outputConsoleLogButton = document.querySelector('.button-output-console-log')

outputConsoleLogButton.addEventListener ('click' , () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Вывод консоль лог при наведении на главный заголовок

const mainHeading = document.querySelector('.take-product');

mainHeading.addEventListener ('mouseover', () =>  {
  console.log(mainHeading)
})

// Смена цвета кнопки

let changeColorForButton = document.querySelector('.button-change-color-for-button');

changeColorForButton.addEventListener ('click', () => {

  if (changeColorForButton.classList.contains('blue')){
    changeColorForButton.classList.toggle('red')
  }
  else{
    changeColorForButton.classList.toggle('blue');
  }
  })
