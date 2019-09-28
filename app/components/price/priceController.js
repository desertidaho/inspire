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
        // _ps.getMetalPrice()
        _ps.getCryptoPrice()
        _ps.refresh()
    }

}

