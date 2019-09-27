export default class Price {
    constructor(data) {
        this.rate = data.rate
    }

    priceTemplate() {
        return `
      <div class="" id="price-div">
          <h6 class="text-white font-italic mt-1">${this.rate}</h6> 
      </div>
          `
    }

}
