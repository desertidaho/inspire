import PriceService from "./priceService.js";

const _ps = new PriceService()

function drawPrice() {
    let template = _ps.CryptoPrice.priceTemplate()
    document.querySelector('#price').innerHTML = template
}


//Public
export default class PriceController {
    constructor() {
        _ps.addSubscriber('cryptoPrice', drawPrice)
        _ps.addSubscriber('goldPrice', drawPrice)
        _ps.addSubscriber('silverPrice', drawPrice)
        _ps.getCryptoPrice()
        _ps.getMetalPrice()
        _ps.refresh()
    }

}

