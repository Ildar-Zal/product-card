import { Drink } from "./drink.js"
export class Fresh extends Drink {
  #temperature;
  constructor(name, size, price, isCold) {
    super(name, size, price);
    this.isCold = isCold;
    this.#temperature = null;
    this.ready = false;
  }

  presentDrink() {
    this.#makeDrink();
    this.#setTemperature(25);
    this.ready = true;
    console.log(`Ваш заказ: Свежий  ${this.name} ${this.size} мл! С вас ${this.price} долларов`);
  }

  #makeDrink() {
    console.log(`Звуки блендера:ВЖЖЖВЖЖВВЖВЖЖВЖ (Готовиться ${this.name})`);
  }

  #setTemperature(temperature) {
    this.#temperature = temperature;
    if (this.isCold) {
      console.log("Добавим лёд");
      this.#temperature = 0;
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