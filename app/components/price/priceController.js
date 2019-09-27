import PriceService from "./priceService.js";

const _ps = new PriceService()

function drawPrice() {
    let template = _ps.Price.priceTemplate()
    document.querySelector('#price').innerHTML = template
}


//Public
export default class PriceController {
    constructor() {
        _ps.addSubscriber('price', drawPrice)
        _ps.getPrice()
    }

}

