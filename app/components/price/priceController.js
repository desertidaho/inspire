import PriceService from "./priceService.js";

const _ps = new PriceService()

function drawPrice() {
    let template = _ps.Price.priceTemplate()
    document.querySelector('#price').innerHTML = template
}

function drawGoldPrice() {
    let template = _ps.GoldPrice.goldPriceTemplate()
    document.querySelector('#goldPrice').innerHTML = template
}

function drawSilverPrice() {
    let template = _ps.SilverPrice.priceTemplate()
    document.querySelector('#silverPrice').innerHTML = template
}


//Public
export default class PriceController {
    constructor() {
        _ps.addSubscriber('price', drawPrice)
        _ps.addSubscriber('goldPrice', drawGoldPrice)
        _ps.addSubscriber('silverPrice', drawSilverPrice)
        _ps.getPrice()
        _ps.getMetalPrice()
        _ps.refresh()
    }

}

