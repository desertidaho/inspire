export default class Price {
    constructor(data) {
        this.btc = data[0].id;
        this.btcName = this.btc.charAt(0).toUpperCase() + this.btc.slice(1)
        this.btcPrice = '$' + Number(data[0].priceUsd).toFixed(2);
        this.btc24HourChange = Number(data[0].changePercent24Hr).toFixed(2);

        this.eth = data[1].id;
        this.ethName = this.eth.charAt(0).toUpperCase() + this.eth.slice(1)
        this.ethPrice = '$' + Number(data[1].priceUsd).toFixed(2);
        this.eth24HourChange = Number(data[1].changePercent24Hr).toFixed(2);

        this.ltc = data[5].id;
        this.ltcName = this.ltc.charAt(0).toUpperCase() + this.ltc.slice(1)
        this.ltcPrice = '$' + Number(data[5].priceUsd).toFixed(2);
        this.ltc24HourChange = Number(data[5].changePercent24Hr).toFixed(2);
    }

    priceTemplate() {
        return `
        <tr class="table-header">
		    <th width="50%"></th>
			<th width="40%">Price</th>
			<th id="change24" width="10%">Change/24hr</th>
        </tr>
        <tr class="table-rows">
            <td>${this.btcName}</td>
            <td>${this.btcPrice}</td>
            <td align="center">${this.btc24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.ethName}</td>
            <td>${this.ethPrice}</td>
            <td align="center">${this.eth24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.ltcName}</td>
            <td>${this.ltcPrice}</td>
            <td align="center">${this.ltc24HourChange}%</td>
        </tr>
          `
    }

}
