class Human {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    getHumanInfo() {
        console.log(`Имя - ${this.name}. Возраст - ${this.age}`);
    }
}

class Car extends Human {

    owner = {};

    constructor(mark, model,yearOfEgition, licensePlate){
      super()
      this.mark = mark;
      this.model = model;
      this.yearOfEgition = yearOfEgition;
      this.licensePlate = licensePlate;
    }

    setOwner(owner){
        if(owner.age >= 18){
            this.owner = owner
        }else {
            console.log('К сожалению, вы еще не достигли 18 лет!')
        }
    }

    getCarInfo(){
       console.log(`Марка автомобиля: ${this.mark}, модель: ${this.model}, год выпуска: ${this.yearOfEgition}, номерной знак: ${this.licensePlate}.`)
       this.owner.getHumanInfo()
    }

}

const Vlad = new Human('Vlad', 20);
const Oleg = new Human('Oleg', 17);

const Yoyota = new Car('Yoyota', 'RAV4', 2021, 'BO2865BT');
const Mercedes = new Car('Mercedes-Benz', 'A-Class', 2022, 'CB8136AX');

Yoyota.setOwner(Vlad)
Mercedes.setOwner(Oleg)

console.log(Yoyota.getCarInfo());
