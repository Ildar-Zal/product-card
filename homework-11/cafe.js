export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfoCafe() {
    return [this.name, this.location].toString();
  }

  orderDrink(drink) {
    drink.presentDrink();
  }
}