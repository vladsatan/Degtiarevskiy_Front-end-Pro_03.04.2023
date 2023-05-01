class Human {
    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    residents = [];

    addResidents(obj) {
        this.residents.push(obj)
        return this.residents
    }
}

class House {

    arrayOfFlets = [];

    constructor(numOfFlats) {
        this.numOfFlats = numOfFlats;
    }

    addFlat(flet){
        if(this.numOfFlats <= this.arrayOfFlets.length){
            console.log('Количество квартир в этом доме достигло максимального значения')
        }else{
            this.arrayOfFlets.push(flet)
        }
    }

}

const Vlad = new Human('Vlad', 'male');
const Danil = new Human('Danil', 'male');
const Vika = new Human('Vika', 'female');
const Masha = new Human('Masha', 'female');

const Flat1 = new Flat();
const Flat2 = new Flat();

Flat1.addResidents(Danil)
Flat1.addResidents(Vika)
Flat1.addResidents(Masha)

Flat2.addResidents(Vlad)
Flat2.addResidents(Masha)

const houseNumber1 = new House(2);
const houseNumber2 = new House(1);

houseNumber1.addFlat(Flat1)
houseNumber1.addFlat(Flat2)

houseNumber2.addFlat(Flat1)
houseNumber2.addFlat(Flat2)



