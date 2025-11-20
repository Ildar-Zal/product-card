//3. Функция для вывода температуры в городе

const checkTemperatureInCity = (city, temperature) => console.log(`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`);

checkTemperatureInCity('Париж',6);

//4. Функция сравнения скорости со сверхзвуковой

const SPEED_OF_SOUND = 343;

const compareSpeedToSpeedOfSound = speed => {
  let speedCategory = speed > SPEED_OF_SOUND ? 'Сверхзвуковая скорость' : 'Дозвуковая скорость';
  console.log(speedCategory);
}

compareSpeedToSpeedOfSound(343);

//5. Функция для покупки товара 

const product = 'Картошка';
const productPrice = 10;

const buyProduct = budget => {
  if (budget >= productPrice) {
    console.log(`${product} приобретёна. Спасибо за покупку!`);
  } else {
    moneyToBuy = productPrice - budget;
    console.log(`Вам не хватает ${moneyToBuy}, пополните баланс`);
  }
}

buyProduct(10);

//6. Создание своей функции

const productId = 10;
const getProductId = () => productId;

console.log(getProductId())

//7. Создание 3х переменных

const animal = 'Кошка';
let isBlack = true;
const furniture = 'Шкаф';