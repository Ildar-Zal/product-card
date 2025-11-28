

let amountProductCards

while(amountProductCards < 1 || amountProductCards > 5 || amountProductCards === undefined) {
  amountProductCards = prompt("Введите число карточек что бы их вывести (от 1 до 5)")
}

const displayProductCards = (amount => {

let counter = 1;
const productCardTemplate = document.getElementById('product-card-template')
const productCardList = document.querySelector('.product-card-list')

productCards.forEach((productCard) => {
  const productCardClone = productCardTemplate.content.cloneNode(true);
  productCardClone.querySelector('img').src = `images/${productCard.img}.png`;
  productCardClone.querySelector('.product-category').textContent = productCard.category
  productCardClone.querySelector('.product-name').textContent = productCard.name
  productCardClone.querySelector('.product-description').textContent = productCard.description
  productCardClone.querySelector('.product-compound').textContent = 'Состав:'
  const ul = productCardClone.querySelector('.product-compound')
  productCard.compound.forEach(compound => {
    const newLi = document.createElement('li');
    newLi.className = 'product-compound-item '
    newLi.textContent = compound;
    ul.appendChild(newLi)
 })
  productCardClone.querySelector('.product-price-label').textContent = productCard.price
  productCardClone.querySelector('.product-price').textContent = '₽'

  if (amount>=counter) {
  productCardList.appendChild(productCardClone)
  counter = counter+1
    }
  })
})

displayProductCards(amountProductCards)

productCards.reduce((accum,productCard) => {
const name = `${productCard.name}; `
return accum +=name
},'')

productCards.reduce((accum,productCard) => {
const description = productCard.description
accum.push({name: description})
return accum;
},[])