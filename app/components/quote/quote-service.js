import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	//baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	//baseURL: 'https://api.quotable.io/random',
	baseURL: 'https://cors-anywhere.herokuapp.com/https://type.fit/api/quotes',
	timeout: 15000
});

let _state = {
	quote: {},
	allQuotes: []
}

let _subscribers = {
	quote: [],
	allQuotes: []
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

	get AllQuotes() {
		return _state.allQuotes
	}

	getQuote() {
		let i = this.getRandom()
		_quoteApi.get()
			.then(res => {
				_setState('allQuotes', res.data)
				_setState('quote', new Quote(res.data, i))
			})
	}

	nextQuote() {
		let i = this.getRandom()
		_setState('quote', new Quote(this.AllQuotes, i))
	}

	getRandom() {
		return Math.floor((Math.random() * 1643) + 1);
	}

}
