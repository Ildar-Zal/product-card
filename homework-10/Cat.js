import { Pet } from "./Pet.js";
export class Cat extends Pet {
  constructor(name, color, age, health, friendly) {
    super(name, color, age, health, friendly);
  }

  makeSound() {
    if (this.friendly) {
      console.log(`${this.name}: Мур`);
    }
    else {
      console.log(`${this.name}: МРяяяяяяя меня кусили!!`);
    }
  }

  takeDamage() {
    this.friendly = false;
    this.health -= 30;
  }

  eat() {
    super.eat();
    this.friendly = true;
    this.health += 30;
    this.makeSound();
  }
}