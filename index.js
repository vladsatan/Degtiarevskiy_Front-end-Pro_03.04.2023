const button = document.getElementById("submit-btn");
const form = document.getElementById('form')

function getWeather (city) {

    if(!city) city = 'Kyiv'

    let xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            createWheaterCard(response)
        }

        if(xhr.status === 404){
            errorCard()
            xhr.abort()
        }
    };   
    xhr.send();   
}

function createWheaterCard(item){

    const error = document.querySelector(".errorCard")

    if(error){
        error.remove()
    }

   const card = document.getElementById("weather-card");
   card.classList.remove("weather-card-close");
   card.classList.add("weather-card");

   const city = document.getElementById("card-city");
   const temp = document.getElementById("temp");
   const img = document.getElementById("card-photo");
   const description = document.getElementById("description");
   const pressure = document.getElementById("box-pressure");
   const humidity = document.getElementById("box-humidity");
   const speed = document.getElementById("box-speed");
   const deg = document.getElementById("box-deg");

    let array = item.weather
    let curSrc
    let curDescr

    array.forEach(e => {
        curSrc = e.icon
        curDescr = e.description
    })

   city.textContent = item.name
   temp.textContent = `${(item.main.temp).toFixed()}°`
   img.src = `https://openweathermap.org/img/w/${curSrc}.png`
   description.textContent = curDescr
   pressure.textContent = `${item.main.pressure} mm`
   humidity.textContent = `${item.main.humidity} %`
   speed.textContent = `${item.wind.speed} m/s`
   deg.textContent = `${item.wind.deg}°`
}

function errorCard(){

    const error = document.querySelector(".errorCard")

    if(error){
        error.remove()
    }

    const card = document.createElement("div")
    const h1 = document.createElement("h1")

    h1.textContent = "Oops, we couldn't find your city..."

    card.classList.add("errorCard")
    card.append(h1)

    const container = document.getElementById('card-container')
    const weatherCard = document.getElementById("weather-card")
    weatherCard.classList.remove("weather-card")
    weatherCard.classList.add("weather-card-close")
    container.append(card)
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    button.addEventListener('click', ()=> {
        let currentCity = document.getElementById("city").value;
        getWeather(currentCity)
    })
})
