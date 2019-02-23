import WeatherService from "./weather-service.js";

let _weatherService = new WeatherService()

function drawWeather() {
	let template = _weatherService.Weather.weatherTemplate()
	document.querySelector('#weather').innerHTML = template
}

export default class WeatherController {
	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
