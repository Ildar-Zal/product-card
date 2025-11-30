import { productCards } from "./product-cards.js";

//1.Получить список названий продуктов в строке с помощью reduce

productCards.reduce((accum, productCard) => {
  const name = `${productCard.name}; `;
  return accum +=name;
}, '');

//2.Сделать имя продукта ключом, а свойство описанием с помощью reduce

productCards.reduce((accum,productCard) => {
  const description = productCard.description;
  accum.push({name: description});
  return accum;
}, []);

//3.Сделать функцию, которая спрашивает сколько вывести карточек и наполняет их свойствами

const getAmountProductCards = () => {
  const amountProductCards = prompt("Введите число карточек что бы их вывести (от 1 до 5)");

  if (amountProductCards >= 1 && amountProductCards <=5) {
    return amountProductCards;
  } else {
    return;
  }
}

const fillUpProductCards = amountProductCards => {

  if (!amountProductCards)
  {
    alert("Вы ввели неверное количество карточек");
    return;
  }

  const productCardTemplate = document.getElementById('product-card-template');
  const productCardList = document.querySelector('.product-card-list');
  const productCardsSliced = productCards.slice(0, amountProductCards);

  productCardsSliced.forEach(productCard => {
    const productCardClone = productCardTemplate.content.cloneNode(true);
    productCardClone.querySelector('img').src = `images/${productCard.img}.png`;
    productCardClone.querySelector('.product-category').textContent = productCard.category;
    productCardClone.querySelector('.product-name').textContent = productCard.name;
    productCardClone.querySelector('.product-description').textContent = productCard.description;
    productCardClone.querySelector('.product-compound').textContent = 'Состав:';
    productCardClone.querySelector('.product-price-label').textContent = "Цена";
    productCardClone.querySelector('.product-price').textContent = `${productCard.price} ₽`;
    const ulProductCompound = productCardClone.querySelector('.product-compound');

    productCard.compound.forEach(compound => {
      const newLi = document.createElement('li');
      newLi.className = 'product-compound-item';
      newLi.textContent = compound;
      ulProductCompound.appendChild(newLi);
    })
    productCardList.appendChild(productCardClone);
  })
}

const displayProductCards = () => {
  const amountProductCards = getAmountProductCards();
  fillUpProductCards(amountProductCards);
}

displayProductCards();