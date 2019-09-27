export default class Price {
    constructor(data) {
        this.rate = '$' + data
    }

    priceTemplate() {
        return `
      <div class="" id="price-div">
          <h6 class="text-white font-italic mt-1">BTC ${this.rate}</h6> 
      </div>
          `
    }

}
