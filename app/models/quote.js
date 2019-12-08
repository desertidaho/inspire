export default class Quote {
  constructor(data, i) {
    this.author = data[i].author
    this.text = data[i].text
  }

  quoteTemplate() {
    return `
      <div class="" id="quote-div">
          <h6 class="text-white font-italic mt-1">${this.text}</h6> <p class="text-white mt-3"><span class="author"> &mdash; ${this.author}</span></p>
          <div>
            <button class="btn btn-sm btn-outline-light shadow-lg mt-3" id="next-quote"
					  onclick="app.controllers.quoteController.nextQuote()">Change Quote<i
            class="fas fa-arrow-right ml-2"></i></button>      
          </div>
          <p class="after-author"> </p>
      </div>
          `
  }

}