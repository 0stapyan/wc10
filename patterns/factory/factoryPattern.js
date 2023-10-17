// Here I used "factoryPattern". Foe example we have a restaurant, when visitors buy coffee. We use class 'CoffeeFactory'
// to create new drinks in our menu, using factory.

class CoffeeFactory {
    createDrink(type) {
      switch (type) {
        case 'espresso':
          return new Espresso();
        case 'cappucino':
          return new Cappucino();
        case 'latte':
          return new Latte();
        case 'flatwhite':
            return new FlatWhite();
        default:
          throw new Error('Invalid drink type');
      }
    }
  }
  
  class Espresso {
    constructor() {
        this.name = 'Espresso';
        this.price = 1;
        this.ingredients = ['ground coffee 9 g', 'water 25 ml'];
      }
    
      describe() {
        return `This is a ${this.name} made from ${this.ingredients.join(', ')}. Price: $${this.price}`;
      }
  }
  
  class Cappucino {
    constructor() {
        this.name = 'Cappucino';
        this.price = 2;
        this.ingredients = ['ground coffee 9 g', 'water 25 ml', 'milk 102 ml'];
      }
    
      describe() {
        return `This is a ${this.name} made from ${this.ingredients.join(', ')}. Price: $${this.price}`;
      }
  }
  
  class Latte {
    constructor() {
        this.name = 'Latte';
        this.price = 2;
        this.ingredients = ['ground coffee 9 g', 'water 25 ml', 'milk 170 ml'];
      }
    
      describe() {
        return `This is a ${this.name} made from ${this.ingredients.join(', ')}. Price: $${this.price}`;
      }
  }

  class FlatWhite{
    constructor() {
        this.name = 'FlatWhite';
        this.price = 2.5;
        this.ingredients = ['ground coffee 18 g', 'water 50 ml', 'milk 170 ml'];
      }
    
      describe() {
        return `This is a ${this.name} made from ${this.ingredients.join(', ')}. Price: $${this.price}`;
      }
  }
  
const coffeeFactory = new CoffeeFactory();
const espresso = coffeeFactory.createDrink('espresso');
const cappucino = coffeeFactory.createDrink('cappucino');
const latte = coffeeFactory.createDrink('latte')
const flatwhite = coffeeFactory.createDrink('flatwhite')

console.log(espresso.describe());
console.log(cappucino.describe());
console.log(latte.describe());
console.log(flatwhite.describe());
  