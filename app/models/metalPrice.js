export default class MetalPrice {
  constructor(info) {
    this.goldPrice = '$' + Number(info.XAU).toFixed(2);
    this.silverPrice = '$' + Number(info.XAG).toFixed(2);
  }

  metalPriceTemplate() {
    return `
        <tr class="table-rows">
            <td width="61.7%">Gold</td>
            <td width="">${this.goldPrice}</td>
        </tr>
         <tr class="table-rows">
            <td>Silver</td>
            <td>${this.silverPrice}</td>
        </tr>
          `
  }

}
