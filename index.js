const SIZE_SMALL = {
   name: 'small',
   price: 50,
   calories: 20
}
const SIZE_BIG = {
   name: 'big',
   price: 100,
   calories: 40
}

const STUFFING_CHEESE = {
   name: 'cheese',
   price: 10,
   calories: 20
}

const STUFFING_SALAD = {
   name: 'salad',
   price: 20,
   calories: 5
}

const STUFFING_POTATO = {
   name: 'potato',
   price: 15,
   calories: 10
}

const TOPPING_MAYO = {
   name: 'mayonnaise',
   price: 20,
   calories: 5
}

const TOPPING_SAUCE = {
   name: 'sauce',
   price: 15,
   calories: 0
}


class Hamburger {

   constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
   }

  static get SIZE_SMALL() {
   return SIZE_SMALL
  }

  static get SIZE_BIG() {
   return SIZE_BIG
  }

  static get STUFFING_CHEESE() {
   return STUFFING_CHEESE
  }

  static get STUFFING_SALAD() {
   return STUFFING_SALAD
  }

  static get STUFFING_POTATO() {
   return STUFFING_POTATO
  }

  static get TOPPING_MAYO() {
   return TOPPING_MAYO
  }

  static get TOPPING_SAUCE() {
   return TOPPING_SAUCE
  }

  addTopping(topping){
   this.toppings.push(topping)
  }

  calculate() {
   let array = [this.size, this.stuffing];
   let kcal = 0;

   if(this.toppings.length > 0){
      this.toppings.forEach(e=>{
         array.push(e);
      })
   }

   array.forEach(e=>{
      kcal += e.calories
   })

   return `${kcal} kcal`
  }

  calculatePrice() {
   let array = [this.size, this.stuffing];
   let price = 0;

   if(this.toppings.length > 0){
      this.toppings.forEach(e=>{
         array.push(e);
      })
   }

   array.forEach(e=>{
      price += e.price
   })

   return `${price} MNT`
  }
  
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: " + hamburger.calculate());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: " + hamburger.calculatePrice());
