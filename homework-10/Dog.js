import { Pet } from "./Pet.js";
export class Dog extends Pet {
  constructor(name, color, age, health, friendly) {
    super(name, color, age, health, friendly);
  }

  makeSound() {
    if (this.friendly) {
      console.log(`${this.name}: Гав Гав Гав`);
    }
    else {
      console.log(`${this.name}: злой меня кусили ГАВ ГАВ ГАВ`);
    }
  }

  takeDamage() {
    super.takeDamage();
    this.friendly = false;
  }

  eat() {
    super.eat();
    this.friendly = true;
    this.health += 10;
    this.makeSound();
  }

  bite(pet) {
    super.bite(pet);
  }
}