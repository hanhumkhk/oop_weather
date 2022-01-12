// LS object
const ls = new LS()
// Init location data
const weatherLocation = ls.getLocationData()
// Weather object
const weather = new Weather(weatherLocation)
// UI object
const ui = new UI()
// Init DOM reload
document.addEventListener('DOMContentLoaded', getWeather)

// Change city and get weather data
const form = document.querySelector('#change-city')
form.addEventListener('submit', changeCityWeather)

function changeCityWeather(event){
    const city = document.querySelector('#city-name').value
    weather.changeCity(city)
    ls.setLocationData(city)
    getWeather()
    document.querySelector('#city-name').value = ''
    event.preventDefault()
}


// Get city weather and display it
function getWeather() {
    weather.getWeather()
        .then(data => {
            ui.drawWeather(data)
        })
        .catch(error => console.log(error));
}