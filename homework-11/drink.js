export class Drink {
  #temperature;
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = null;
  }
  presentDrink() {
    this.#makeDrink();
    this.#setTemperature(100);
  }

  #makeDrink() {
    console.log("Напиток готовиться");
  }

  getTemperature() {
    return this.#temperature;
  }

  #setTemperature(temperature) {
    this.#temperature = temperature;
  }

  getInfoDrink() {
    return [this.name, this.size, this.price].toString();
  }
}