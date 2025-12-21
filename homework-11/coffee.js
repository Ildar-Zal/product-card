import { Drink } from "./drink.js"
export class Coffee extends Drink {
  #temperature;
  constructor(name, size, price, grains) {
    super(name, size, price);
    this.hasMilk = !(name === 'Эспрессо' || name === 'Американо');
    this.grains = grains;
    this.#temperature = null;
    this.ready = false;
  }

  presentDrink() {
    this.#makeDrink();
    this.#setTemperature(100);
    this.ready = true;
    console.log(`${this.name} ${this.size}мл готов! С вас ${this.price} долларов`);
  }

  #makeDrink() {
    console.log(`Готовим ${this.name}`);
  }

  #setTemperature(temperature) {
    this.#temperature = temperature;
    if (this.hasMilk) {
      console.log("Греем молоко");
    }
  }

  getTemperature() {
    if (!this.ready) {
      console.log(`${this.name} не готов`);
      return;
    }
    if (this.ready && this.#temperature > 25) {
      return this.#temperature -= 5;
    }
    if (this.#temperature <= 25) {
      console.log(`${this.name} остыл`);
      return this.#temperature;
    }
  }

  getInfoDrink() {
    return super.getInfoDrink() + this.grains;
  }
}