import Weather from "../../models/weather.js";

// @ts-ignore
const weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 6000
});

let _state = {
	weather: {}
}

let _subscribers = {
	weather: []
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

	getWeather() {
		weatherApi.get().then(res => {
			_setState('weather', new Weather(res.data))
		})
	}

}
