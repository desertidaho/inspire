import WeatherService from "./weather-service.js";

const _weatherService = new WeatherService()

function drawWeather() {
	let template = _weatherService.Weather.weatherTemplate()
	document.querySelector('#weather').innerHTML = template
}

function drawCityForm() {
	let template = `<form class="form-inline" onsubmit="app.controllers.weatherController.addCity(event)">
                    <input type="text" class="form-control mb-2 mr-sm-2" id="" name="name" placeholder=" City...">
                    <button type="submit" class="btn btn-primary mb-2 shadow">Submit</button>
                  </form>`
	document.querySelector('#city-form').innerHTML = template
}

function drawForecastWeather() {
	_weatherService.ForecastWx.forecastWeatherTemplate()
}


//Public
export default class WeatherController {
	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.addSubscriber('changeCity', drawCityForm)
		_weatherService.addSubscriber('forecastWx', drawForecastWeather)
		_weatherService.getWeather()
	}

	changeCity() {
		// @ts-ignore
		document.querySelector('#city-form').style.visibility = "visible"
		_weatherService.changeCity()
	}

	addCity(event) {
		event.preventDefault()
		let form = event.target
		let newCity = {
			name: form.name.value
		}
		_weatherService.addCity(newCity)
		form.reset()
		// @ts-ignore
		document.querySelector('#city-form').style.visibility = "hidden"
	}

	forecast() {
		let cityId = _weatherService.Weather.cityId
		_weatherService.getForecast(cityId)
	}

}
