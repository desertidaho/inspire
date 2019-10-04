export default class Weather {
    constructor(data) {
        this.city = data.name
        this.description = data.weather[0].description
        this.kelvin = data.main.temp
        this.celcius = (this.kelvin - 273.15).toFixed(0)
        // @ts-ignore
        this.farenheit = (this.celcius * (9 / 5) + 32).toFixed(0)
        this.windDegrees = data.wind.deg
        this.windSpeed = data.wind.speed
        this.sunrise = '0' + (parseInt(new Date(data.sys.sunrise * 1e3).toISOString().slice(-13, -11)) - 6) + new Date(data.sys.sunrise * 1e3).toISOString().slice(-11, -8)
        this.sunset = (Math.abs(parseInt(new Date(data.sys.sunset * 1e3).toISOString().slice(-13, -11)) - 12) + 8) + new Date(data.sys.sunset * 1e3).toISOString().slice(-11, -8)
        this.icon = data.weather[0].icon
    }

    weatherTemplate() {
        return `
      <div class="text-white" id="weather-div">
                  <h5 class=""><span data-toggle="tooltip" title="Change City" onclick="app.controllers.weatherController.changeCity()" id="user">
                  ${this.city}</span> Weather &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;<img id=wx-icon" src="https://openweathermap.org/img/w/${this.icon}.png"> </h5>
				  <p>Sky condition: ${this.description}</p>
				  <p class="weather-p">Temperature: ${this.celcius}°C &nbsp ${this.farenheit}°F</p>
          <p>Wind from: <span class="wind-p"> ${this.windDegrees}° @ ${this.windSpeed} </span> kts.</p>
          <p>Sunrise: ${this.sunrise}</p>
          <p>Sunset: ${this.sunset}</p>
		  </div>
          `
    }

}