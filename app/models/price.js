export default class Price {
    constructor(data) {
        this.rate = '$' + data.slice(0, data.length-2);
    }

    priceTemplate() {
        return `
      <div class="" id="price-div">
          <h6 class="text-white font-italic mt-1">BITCOIN ${this.rate}</h6> 
      </div>
          `
    }

}
