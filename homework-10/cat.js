import { Pet } from "./pet.js";
export class Cat extends Pet {
  constructor(name, color, age, health, isFriendly) {
    super(name, color, age, health, isFriendly);
  }

  makeSound() {
    if (this.isFriendly) {
      console.log(`${this.name}: Мур`);
    }
    else {
      console.log(`${this.name}: МРяяяяяяя меня кусили!!`);
    }
  }

  takeDamage() {
    this.isFriendly = false;
    this.health -= 30;
  }

  eat() {
    if (this.health >= 100) {
      console.log(`${this.name} не голоден`);
      return;
    }
    super.eat();
    this.isFriendly = true;
    this.health += 30;
    this.makeSound();
  }
}