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
        this.cityId = data.id

        if (this.windDegrees < 10) {
            this.windDegrees = '00' + this.windDegrees
        }
        if (this.windDegrees < 100 && this.windDegrees >= 10) {
            this.windDegrees = '0' + this.windDegrees
        }
    }

    weatherTemplate() {
        return `
      <div class="text-white" id="weather-div">
                  <h5 class=""><span data-toggle="tooltip" title="Change City" onclick="app.controllers.weatherController.changeCity()" id="">
                  ${this.city}</span> Weather &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;<img id=wx-icon" src="https://openweathermap.org/img/w/${this.icon}.png"> </h5>
				  <p>Sky condition ${this.description}</p>
				  <p class="weather-p">Temperature ${this.farenheit}°F</p>
          <p>Wind from <span class="wind-p"> ${this.windDegrees}° @ ${this.windSpeed} </span> kts.</p>
          <p>Sunrise ${this.sunrise}</p>
          <p>Sunset ${this.sunset}</p>
          </div>
          <div>
						<button class="btn btn-sm btn-outline-light shadow-lg" id="forecast"
							onclick="app.controllers.weatherController.forecast()">Forecast<i
								class="fas fa-arrow-right ml-2"></i></button>
					</div>
          `
    }

    cityName() {
        return this.city
    }

    modalFooter(cityName) {
        return `
      <a href="https://weather.com/en-US/search/enhancedlocalsearch?where=${cityName}&loctypes=1/4/5/9/11/13/19/21/1000/1001/1003/&from=hdr"
        target="_blank"><button type="button" class="btn btn-primary shadow">3 DayForecast</button></a>
            <button type="button" class="btn btn-outline-dark shadow" data-dismiss="modal">Close</button>
        `
    }

}