import { Pet } from "./pet.js";
export class Dog extends Pet {
  constructor(name, color, age, health, isFriendly) {
    super(name, color, age, health, isFriendly);
  }

  makeSound() {
    if (this.isFriendly) {
      console.log(`${this.name}: Гав Гав Гав`);
    }
    else {
      console.log(`${this.name}: злой меня кусили ГАВ ГАВ ГАВ`);
    }
  }

  takeDamage() {
    super.takeDamage();
    this.isFriendly = false;
  }

  eat() {
    if (this.health >= 200) {
      console.log(`${this.name} не голоден`);
      return;
    }
    super.eat();
    this.isFriendly = true;
    this.health += 10;
    this.makeSound();
  }

  bite(pet) {
    super.bite(pet);
  }
}