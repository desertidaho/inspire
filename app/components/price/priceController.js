import PriceService from "./priceService.js";

const _ps = new PriceService()

function drawPrice() {
    document.getElementById('refresh-prices').style.visibility = "visible"
    document.getElementById('price-div').style.background = "rgb(4, 228, 4)"
    let template = _ps.Price.priceTemplate()
    document.querySelector('#price').innerHTML = template
    setTimeout(function () {
        document.getElementById('refresh-prices').style.visibility = "hidden"
    }, 1000);
    setTimeout(function () {
        document.getElementById('price-div').style.background = "black"
    }, 1000);
}

function drawMetalPrice() {
    let template = _ps.MetalPrice.metalPriceTemplate()
    document.querySelector('#metals').innerHTML = template
}

function drawMarketCap() {
    let template = _ps.Price.marketCapTemplate()
    document.title = 'Inspire' + '  (Market' + template + ')'
    document.querySelector('#market-cap').innerHTML = template + " Market Cap"
}


//Public
export default class PriceController {
    constructor() {
        _ps.addSubscriber('price', drawPrice)
        _ps.addSubscriber('price', drawMarketCap)
        _ps.addSubscriber('metalPrice', drawMetalPrice)
        _ps.getPrice()
        //_ps.getMetalPrice()
        _ps.refresh()
    }

    openCryptoNews() {
        window.open('https://brettwilcox.info/Crypto/')
    }

}

