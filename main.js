// Покраска всех карточек и сброска цвета
const productCards = document.querySelectorAll('.product-card');
const changeColorAllButton = document.querySelector('#button-change-color-all-card');

changeColorAllButton.addEventListener('click',() => {
 productCards.forEach((card) => card.classList.toggle('green'));
 if (changeColorAllButton.innerText == 'Поменять цвет всех карточек') {
    changeColorAllButton.innerText = 'Сбросить цвет всех карточек';
  } else {
    changeColorAllButton.innerText = 'Поменять цвет всех карточек';
    productCards.forEach((card) => card.classList.remove('red','green'))
    changeColorFirstCardButton.innerText = 'Поменять цвет первой карточки';
  }
})

// Покраска первой карточки и сброска цвета

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.getElementById('button-change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.classList.toggle('red');
  if (changeColorFirstCardButton.innerText == 'Поменять цвет первой карточки') {
    changeColorFirstCardButton.innerText = 'Сбросить цвет первой карточки';
  } else {
    changeColorFirstCardButton.innerText = 'Поменять цвет первой карточки';
  }
})

// Открыть гугл

openGoogle();

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer==true){
    window.open('https://google.com');
  } else {
    return;
  }
}

// Вывод  консоль лог

const outputConsoleLogButton = document.querySelector('#button-output-console-log');

outputConsoleLogButton.addEventListener('click' , () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Вывод консоль лог при наведении на главный заголовок

const mainTitle = document.querySelector('.take-product');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle);
})

// Смена цвета кнопки

const changeColorForButton = document.getElementById('button-change-color-for-button');

changeColorForButton.addEventListener('click', () => {

  if (changeColorForButton.classList.contains('blue')){
    changeColorForButton.classList.toggle('red');
  } else {
    changeColorForButton.classList.toggle('blue');
  }
  })
