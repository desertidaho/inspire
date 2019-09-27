export default class Price {
    constructor(data) {
        this.rate = '$' + data.slice(0, data.length-2);
    }

    priceTemplate() {
        return `
      <div class="" id="price-div">
          <h6 class="text-white mt-1">Bitcoin ${this.rate}</h6> 
      </div>
          `
    }

}
