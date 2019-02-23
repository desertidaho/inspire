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
      <div class="card text-white" id="weather-card">
			 <!-- <img class="card-img-top" src="" alt="Card image cap"> -->
			  <div class="card-body">
				  <h5 class="card-title">${this.city} weather:</h5>
				  <p>${this.description}</p>
				  <p>${this.celcius}°C &nbsp ${this.farenheit}°F</p>
				  <p>wind from ${this.windDegrees}° @ ${this.windSpeed} kts.</p>
		  	</div>
		  </div>
    `
  }

}