export default class Price {
    constructor(data) {
        this.rate = '$' + data.slice(0, data.length-2);
    }

    priceTemplate() {
        return `
      <div class="" id="price-div">
          <h5 class="text-white mt-1">Bitcoin ${this.rate}</h5> 
      </div>
          `
    }

}
