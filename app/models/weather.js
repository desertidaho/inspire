export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

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
      <div class="card">
			 <!-- <img class="card-img-top" src="" alt="Card image cap"> -->
			  <div class="card-body">
				  <h4 class="card-title">City: ${this.city}</h4>
				  <h5>Description: ${this.description}</h5>
				  <h5>Temperature: ${this.celcius}°C<span class="text-white">....</span>${this.farenheit}°F</h5>
				  <h5>Wind direction from: ${this.windDegrees}°</h5>
				  <h5>Wind speed: ${this.windSpeed}kts.</h5>
		  	</div>
		  </div>
    `

  }


}