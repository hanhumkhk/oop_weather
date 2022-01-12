class Weather {
    constructor(city) {
        this.city = city
        this.key = '68c613f14db19e066c4d03f0bf56c5f3'
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }

    changeCity(city){
        this.city = city;
    }
}