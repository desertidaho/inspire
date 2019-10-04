import Weather from "../../models/weather.js";

// @ts-ignore
const _weatherApi = axios.create({
	//baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	baseURL: "https://api.openweathermap.org/data/2.5/weather?q=Boise,us&appid=bf264f973fd98424c688abafb6a2434f",
	timeout: 6000
});

let _state = {
	weather: {},
	changeCity: "",
	newCity: {}
}

let _subscribers = {
	weather: [],
	changeCity: [],
	newCity: []
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

	getWeather() {
		_weatherApi.get()
			.then(res => {
				_setState('weather', new Weather(res.data))
			})
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

}
