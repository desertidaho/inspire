import Quote from "../../models/quote.js";

// @ts-ignore
let _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


//Public
export default class QuoteService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Quote() {
		return _state.quote
	}

	getQuote() {
		_quoteApi.get()
			.then(res => {
				_setState('quote', new Quote(res.data))
			})
	}

}
