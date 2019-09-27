import Price from "../../models/price.js";

// @ts-ignore
const _priceApi = axios.create({
    baseURL: 'https://api.coindesk.com/v1/bpi/currentprice/usd.json',
    timeout: 6000
});

let _state = {
    price: {}
}

let _subscribers = {
    price: []
}

function _setState(prop, data) {
    _state[prop] = data
    _subscribers[prop].forEach(fn => fn());
}


//Public
export default class PriceService {
    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }

    get Price() {
        return _state.price
    }

    getPrice() {
        _priceApi.get()
            .then(res => {
                _setState('price', new Price(res.bpi.USD.rate))
            })
    }

}

