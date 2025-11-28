import { socialComments } from "./comments.js"

//1.Отфильтровал массив и получил от 5 до 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numbers.filter(number => number >= 5)

//2.Поиск сущности в массиве

const furnitures = ["Шкаф", "Диван", "Стул"]
const currentFurniture = furnitures.find(furniture => furniture === "Стул")

//3.Перевернул массивы

const reverseArray = array => array.reverse()

const numbersRevers = reverseArray(numbers)
const furnituresRevers = reverseArray(furnitures)

//4.Вывести массив объектов у которых email содержит .com

const socialCommentSpecificEmail = socialComments.filter(socialComment => socialComment.email.includes('com'))

//5.Поменять postId у массивов

const newSocialComments = socialComments.map((socialComment) => ({...socialComment, postId:socialComment.id <= 5 ? 2 : 1}))

//6.Перебрать массив, что бы он состоял только из id и name

const socialCommentsIdName = socialComments.map(socialComment => ({id:socialComment.id, name:socialComment.name}))

//7.Добавление нового свойства в массив

const socialCommentsWithInvalid = socialComments.map(socialComment => ({...socialComment, isInvalid:socialComment.body.length > 180}))

//8.Убрать все свойства из массива, кроме email

const socialCommentEmail = socialComments.reduce((accumulator, currentValue) => {
  accumulator.push(currentValue.email)
  return accumulator;
}, []);

const socialCommentEmail1 = socialComments.map(socialComment => ({email:socialComment.email}))

//9.Привести массив к строке

const socialCommentsEmailToText = socialComments.map(socialComment => socialComment.email).join(', ')
console.log(socialCommentsEmailToText)
