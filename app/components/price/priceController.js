import PriceService from "./priceService.js";

const _ps = new PriceService()

function drawPrice() {
    let template = _ps.Price.priceTemplate()
    document.querySelector('#price').innerHTML = template
}

function drawMetalPrice() {
    let template = _ps.MetalPrice.metalPriceTemplate()
    document.querySelector('#metals').innerHTML = template
}

function drawMarketCap() {
    let template = _ps.Price.marketCapTemplate()
    //document.querySelector('#market-cap').innerHTML = template
    document.title = 'Inspire' + '  (Market' + template + ')'
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

}

