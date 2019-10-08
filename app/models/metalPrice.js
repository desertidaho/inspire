export default class MetalPrice {
  constructor(info) {
    for (let i = 0; i < info.length; i++) {
      if (info[i].symbol == 'XAU') {
        this.goldPrice = '$' + Number(info[i].rateUsd).toFixed(2);
      }
      if (info[i].symbol == 'XAG') {
        this.silverPrice = '$' + Number(info[i].rateUsd).toFixed(2);
      }
    }
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
