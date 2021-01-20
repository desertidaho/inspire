import Weather from "../../models/weather.js";
import ForecastWeather from "../../models/forecastWeather.js";
import CityByIP from "../../models/cityByIP.js";

// @ts-ignore
const _cityByIPApi = axios.create({
	baseURL: "https://ipapi.co/json/",
	timeout: 15000
});

let _state = {
	weather: {},
	changeCity: "",
	newCity: {},
	forecastWx: {},
	cityByIP: ""
}

let _subscribers = {
	weather: [],
	changeCity: [],
	newCity: [],
	forecastWx: [],
	cityByIP: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


//Public
export default class WeatherService {

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Weather() {
		return _state.weather
	}

	get NewCity() {
		return _state.newCity.name
	}

	get ForecastWx() {
		return _state.forecastWx
	}

	get CityByIP() {
		return _state.cityByIP
	}


	getWeather(city) {
		// @ts-ignore
		const weatherApi = axios.create({
			baseURL: "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=bf264f973fd98424c688abafb6a2434f",
			timeout: 6000
		});
		weatherApi.get()
			.then(res => {
				_setState('weather', new Weather(res.data))
			})
	}





	refresh() {
		setInterval(this.getWeather, 600000)
	}

	getNewCityWeather(newCity) {
		let base = "https://api.openweathermap.org/data/2.5/weather?q=" + newCity.name
		let key = ",us&appid=bf264f973fd98424c688abafb6a2434f"
		// @ts-ignore
		axios.create({
			baseURL: base + key,
			timeout: 6000
		}).get()
			.then(res => {
				_setState('weather', new Weather(res.data))
			})
	}

	changeCity() {
		_setState('changeCity', ' ')
	}

	addCity(newCity) {
		_setState('newCity', newCity)
		this.getNewCityWeather(newCity)
	}

	getForecast(cityId) {
		let base = "https://api.openweathermap.org/data/2.5/forecast?appid=bf264f973fd98424c688abafb6a2434f&id=" + cityId
		// @ts-ignore
		axios.create({
			baseURL: base,
			timeout: 1500
		}).get()
			.then(res => {
				_setState('forecastWx', new ForecastWeather(res.data.list))
			})
	}

	getCityByIP() {
		console.log("calling cityByIP")
		let consoleLogData = _cityByIPApi.get()
			.then(res => {
				_setState('cityByIP', new CityByIP(res.data))
			})
		console.log(consoleLogData)
	}

}
