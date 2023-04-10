const yearOfBirthday = prompt('Введіть рік вашого народження:');

if(yearOfBirthday === null || yearOfBirthday === "") {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
}

const city = prompt('В якому місті ви живите?');

if(city === null || city === "") {
    alert('Шкода, що Ви не захотіли ввести своє місто');
}

const kindOfSport = prompt('Який ваш улюбленний вид спорту?');

if(kindOfSport === null || kindOfSport === "") {
    alert('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту');
}

let today = new Date(); 
let year = today.getFullYear(); 

const age = year - Number(yearOfBirthday);

let ageMessage;

if(age === 2023) {
    ageMessage = 'Ваш вік - невідомо';
} else {
    ageMessage = `Ваш вік - ${age}`;
}

let userCityMessage;


switch (city) {
    case 'Київ':
        userCityMessage = "Ти живеш у столиці України"
        break;
    case 'Вашингтон':
        userCityMessage = "Ти живеш у столиці США"
        break;
    case 'Лондон':
        userCityMessage = "Ти живеш у столиці Великої Британії"
        break;
    case '':
    case null:
        userCityMessage = `Ти живеш у місті - невідомо`
        break;
    default:
        userCityMessage = `Ти живеш у місті - ${city}`
}

let kindOfSportMessage;

 switch(kindOfSport) {
    case 'футбол':
        kindOfSportMessage = 'Круто! Хочеш стати Ліонелем Мессі?'
        break;
    case 'баскетбол':
        kindOfSportMessage = 'Круто! Хочеш стати Майклом Джорданом?'
        break;  
    case 'бокс':
        kindOfSportMessage = 'Круто! Хочеш стати Майком Тайсаном?'
        break; 
    default:
        kindOfSportMessage = false;
 }

  if(kindOfSportMessage) {
    alert(`${ageMessage}. ${userCityMessage}. ${kindOfSportMessage}`);
  } else {
    alert(`${ageMessage}. ${userCityMessage}.`);
  }