import QuoteService from "./quote-service.js";

const _qs = new QuoteService()

function drawQuote() {
  let template = _qs.Quote.quoteTemplate()
  document.querySelector('#quote').innerHTML = template
}


//Public
export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }

  nextQuote() {
    _qs.nextQuote()
  }

}
