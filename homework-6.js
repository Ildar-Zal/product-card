//1. Создал объект на основе моих данных

const person = {
  name: "Ильдар",
  middleName: "Залялов",
  age: 28,
  mail: "id10997@yandex.ru",
  work: "АйТи-Симулятор",
  jobTitle: "Ученик",
  country: "Россия",
  city: "Архангельск",
  isMarried: false
}

//2.Создал объект хранящий данные об автомобили

const automobile = {
  brand: "Toyota",
  model: "Camry",
  releaseYear: 2012,
  color: "white",
  transmission: "automatic",
}

const carOwner = {...person,...automobile}

//3.Создал функцию, которая проверяет максимальную скорость

const checkMaxSpeed = (object) => {
  if (!object.maxSpeed) {
     object.maxSpeed = 220;
  }
}

//4.Создал функцию, которая выводит свойство объекта в консоль

const displayObjectProperty = (object, property) => {
  console.log(object[property]);
}

displayObjectProperty(automobile,'transmission');

//5.Создал массив продуктов
const products = {
  egg: 10,
  banana: 5,
  milk: 1,
  apple: 3,
  chiken: 2
}

//6.Создал массив из объектов и добавил новый объект в массив

const automobiles = [
  {
    brand: "BMW",
    model: "X5",
    releaseYear: 2025,
    horsePower: 330
  },
  {
    brand: "Audi",
    model: "A6",
    releaseYear: 2005,
    horsePower: 220
  },
  {
    brand: "Volkswagen",
    model: "Passat",
    releaseYear: 2008,
    horsePower: 180
  }
];

automobiles.push({
  brand: "Skoda",
  model: "Octavia",
  releaseYear: 2021,
  horsePower: 150
});

//7.Создал другой массив и объединил

const motorcycles = [
  {
    brand: "Kawasaki Ninja",
    model: "H2R",
    releaseYear: 2018,
    horsePower: 309
  },
  {
    brand: "Honda",
    model: "CBR1000RR-R Fireblade SP",
    releaseYear: 2021,
    horsePower: 211
  },
  {
    brand: "Ducati",
    model: "V4 S",
    releaseYear: 2024,
    horsePower: 218
  }
];

const transports = [...automobiles,...motorcycles];

//8.Создал функцию, которая добавляет новое свойство isOld и в зависимости от даты выпуска проставляет свойству значение

const addPropertyToTransports = (transports) => {
  return transports.map(transport => {
    const isOld = transport.releaseYear > 2010;
    return {...transport, isOld};
  })
}