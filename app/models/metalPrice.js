export default class MetalPrice {
  constructor(data) {
    this.goldPrice = data.XAU;
    this.gold24HourChange = data.XAG;
  }

  priceTemplate() {
    return `
        
          `
  }

}
