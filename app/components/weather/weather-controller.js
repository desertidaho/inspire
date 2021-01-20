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
	let template = _weatherService.ForecastWx.modalWx()
	document.querySelector('#modal-wx').innerHTML = template
}

function modalTitle() {
	let cityName = _weatherService.Weather.cityName()
	let template = cityName + " Weather in 24 Hours"
	document.getElementById('modal-title').innerHTML = template
}

function modalFooter() {
	let cityName = _weatherService.Weather.cityName()
	let footer = _weatherService.Weather.modalFooter(cityName)
	document.getElementById('modal-footer').innerHTML = footer
}

function pullCityByIP() {
	let city = _weatherService.CityByIP.cityByIPTemplate()
	console.log("Bingo!" + city)
	_weatherService.getWeather(city)
}


//Public
export default class WeatherController {
	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.addSubscriber('changeCity', drawCityForm)
		_weatherService.addSubscriber('forecastWx', drawForecastWeather)
		_weatherService.addSubscriber('cityByIP', pullCityByIP)
		_weatherService.refresh()
		_weatherService.getCityByIP()
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
		modalTitle()
		modalFooter()
	}

	closeModal() {
		// @ts-ignore
		$('#startModal').modal('hide')
	}

}
