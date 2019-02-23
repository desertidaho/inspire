export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }

  quoteTemplate() {
    return `
          <h5>${this.author}</h5>
				  <h5>${this.body}</h5>
    `
  }
}