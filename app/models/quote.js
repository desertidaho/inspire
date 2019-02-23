export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }

  quoteTemplate() {
    return `
          <h5 class="text-white font-italic">${this.body}</h5> <p class="text-white"> &ensp; &mdash; ${this.author}</p>
    `
  }
}