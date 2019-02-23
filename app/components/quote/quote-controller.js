import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let template = _qs.Quote.getQuote()
  document.querySelector('#quote').innerHTML = template
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}
