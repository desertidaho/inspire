import PriceService from "./priceService.js";

const _ps = new PriceService()
const mCapArray = []

function drawPrice() {
    let template = _ps.Price.priceTemplate()
    document.querySelector('#price').innerHTML = template
    refreshingPricesText()
    flashGreenOrRed()
}

function refreshingPricesText() {
    document.getElementById('refresh-prices').style.visibility = "visible"
    setTimeout(function () {
        document.getElementById('refresh-prices').style.visibility = "hidden"
    }, 1000);
}

function flashGreenOrRed() {
    let mCap = _ps.Price.mCap()
    mCapArray.push(mCap)
    if (mCapArray.length == 1) {
        document.getElementById('price-div').style.background = "black"
    }
    else if (mCapArray.length == 2 && parseInt(mCapArray[0]) <= parseInt(mCapArray[1])) {
        document.getElementById('price-div').style.background = "rgb(4, 228, 4)"
    }
    else {
        document.getElementById('price-div').style.background = "red"
    }
    setTimeout(function () {
        document.getElementById('price-div').style.background = "black"
    }, 1000);
    mCapArray.length == 2 ? mCapArray.shift() : false
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
        window.open('https://brettwilcox.info/crypto/')
    }

}

