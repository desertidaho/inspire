export default class Weather {
  constructor(data) {
    this.city = data.name
    this.description = data.weather[0].description
    this.kelvin = data.main.temp
    this.celcius = (this.kelvin - 273.15).toFixed(0)
    this.farenheit = (this.celcius * (9 / 5) + 32).toFixed(0)
    this.windDegrees = data.wind.deg
    this.windSpeed = data.wind.speed
  }

  weatherTemplate() {
    return `
      <div class="text-white" id="weather-div">
				  <p class="weather-city">${this.city} weather:</p>
				  <p class="">${this.description}</p>
				  <p class="weather-p">${this.celcius}°C &nbsp ${this.farenheit}°F</p>
				  <p>wind from <span class="wind-p"> ${this.windDegrees}° @ ${this.windSpeed} </span> kts.</p>
		  </div>
    `
  }

}