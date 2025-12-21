import { Drink } from "./drink.js"
export class Soda extends Drink {
  #temperature;
  constructor(name, size, price, isFromFridge) {
    super(name, size, price);
    this.isFromFridge = isFromFridge;
    this.#temperature = null;
    this.ready = false;
  }

  presentDrink() {
    this.#makeDrink();
    this.#setTemperature(25);
    this.ready = true;
    console.log(`Ваш заказ: ${this.name} ${this.size} мл! С вас ${this.price} долларов`);
  }

  #makeDrink() {
    console.log(`Достаю ${this.name}`);
  }

  #setTemperature(temperature) {
    this.#temperature = temperature;
    if (this.isFromFridge) {
      console.log("из холодильника");
      this.#temperature = 7;
    }
  }

  getTemperature() {
    if (!this.ready) {
      console.log(`${this.name} необходимо заказать`);
      return;
    }
    return this.#temperature;
  }

  getInfoDrink() {
    return super.getInfoDrink();
  }
}