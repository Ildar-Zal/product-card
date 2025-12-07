export class Pet {
  constructor(name, color, age, health, isFriendly) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.health = health;
    this.friendly = isFriendly;
  }

  eat() {
    console.log(`${this.name} покушал`);
  }

  sleep() {
    console.log(`${this.name} спит`);
  }

  makeSound() {
    console.log('Я не знаю что я за животное, определи меня');
  }

  bite(pet) {
    pet.takeDamage();
  }

  takeDamage() {
    this.health -= 10;
  }
}