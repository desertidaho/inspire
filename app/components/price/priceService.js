import CryptoPrice from "../../models/cryptoPrice.js";
import MetalPrice from "../../models/metalPrice.js";

// @ts-ignore
const _cryptoPriceApi = axios.create({
    //baseURL: 'https://api.coindesk.com/v1/bpi/currentprice/usd.json',
    //baseURL: 'https://api.blockchain.info/stats',
    baseURL: 'https://api.coincap.io/v2/assets',
    timeout: 6000
});

// @ts-ignore
const _metalPriceApi = axios.create({
    baseURL: 'https://metals-api.com/api/latest',
    timeout: 6000,
    params: { access_key: '4g3r8a3temxq2y1wruyi0v194r399it0g4w0ik0e21nj3o2797ubkr18qv7d8p55' }
});

let _state = {
    cryptoPrice: {},
    metalPrice: {}
}

let _subscribers = {
    cryptoPrice: [],
    metalPrice: []
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

    get CryptoPrice() {
        return _state.cryptoPrice
    }

    get MetalPrice() {
        return _state.metalPrice
    }

    getCryptoPrice() {
        _cryptoPriceApi.get()
            .then(res => {
                _setState('cryptoPrice', new CryptoPrice(res.data.data))
            })
    }

    refresh() {
        setInterval(this.getCryptoPrice, 20000);
    }

    getMetalPrice() {
        _metalPriceApi.get()
            .then(res => {
                _setState('metalPrice', new MetalPrice(res.data.data))
            })
    }

}

