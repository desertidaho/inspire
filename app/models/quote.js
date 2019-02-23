export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }

  quoteTemplate() {
    return `
    <div class="" id="quote-div">
          <h5 class="text-white font-italic mt-1">${this.body}</h5> <p class="text-white mt-3"><span class="author"> &mdash; ${this.author}</span></p><p class="after-author"> </p>
    </div>
          `
  }
}