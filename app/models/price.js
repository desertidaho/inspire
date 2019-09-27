export default class Price {
    constructor(data) {
        this.rate = '$' + Number.parseFloat(data).toFixed(2);
    }

    priceTemplate() {
        return `
      <div class="" id="price-div">
          <h6 class="text-white font-italic mt-1">BITCOIN ${this.rate}</h6> 
      </div>
          `
    }

}
