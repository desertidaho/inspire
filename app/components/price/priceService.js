import Price from "../../models/price.js";
import MetalPrice from "../../models/metalPrice.js";

// @ts-ignore
const _priceApi = axios.create({
    baseURL: 'https://api.coincap.io/v2/assets',
    timeout: 15000
});

// @ts-ignore
const _metalPriceApi = axios.create({
    // baseURL: 'https://cors-anywhere.herokuapp.com/https://metals-api.com/api/latest',
    // timeout: 20000,
    // headers: { content_type: 'application/x-www-form-urlencoded' },
    // params: { access_key: '4g3r8a3temxq2y1wruyi0v194r399it0g4w0ik0e21nj3o2797ubkr18qv7d8p55' },
    baseURL: 'https://api.coincap.io/v2/rates',
    timeout: 15000
});

let _state = {
    price: {},
    metalPrice: {},
    marketCap: {}
}

let _subscribers = {
    price: [],
    metalPrice: [],
    marketCap: []
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

    get MetalPrice() {
        return _state.metalPrice
    }

    get MarketCap() {
        return _state.marketCap
    }

    getPrice() {
        _priceApi.get()
            .then(res => {
                _setState('price', new Price(res.data.data))
            })
    }

    getMetalPrice() {
        _metalPriceApi.get()
            .then(res => {
                _setState('metalPrice', new MetalPrice(res.data.data))
            })
    }

    refresh() {
        setInterval(this.getPrice, 20000)
        //setInterval(this.getMetalPrice, 600000)
    }

}

