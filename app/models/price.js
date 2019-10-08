export default class Price {
    constructor(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == 'bitcoin') {
                this.btcRank = data[i].rank
                this.btcName = data[i].name
                this.btcPrice = '$' + Number(data[i].priceUsd).toFixed(2)
                this.btc24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
            }
            if (data[i].id == 'ethereum') {
                this.ethRank = data[i].rank
                this.ethName = data[i].name
                this.ethPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.eth24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
            }
            if (data[i].id == 'ripple') {
                this.xrpRank = data[i].rank
                this.xrpName = data[i].name
                this.xrpPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.xrp24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
            }
            if (data[i].id == 'litecoin') {
                this.ltcRank = data[i].rank
                this.ltcName = data[i].name
                this.ltcPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.ltc24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
            }
            if (data[i].id == 'stellar') {
                this.xlmRank = data[i].rank
                this.xlmName = data[i].name
                this.xlmPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.xlm24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
            }
            if (data[i].id == 'chainlink') {
                this.linkRank = data[i].rank
                this.linkName = data[i].name
                this.linkPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.link24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
            }
        }

        this.marketCapUsd = 0
        for (let i = 0; i < data.length; i++) {
            this.marketCapUsd += parseInt(Number(data[i].marketCapUsd).toFixed())
        };
        this.marketCapUsd = this.marketCapUsd + 7000000000
        this.marketCapUsd = ('$' + this.marketCapUsd).slice(0, 4) + '.' + ('' + this.marketCapUsd).slice(4, 6) + ' Billion'
    }

    marketCapTemplate() {
        return `
        ${this.marketCapUsd}
        `
    }

    priceTemplate() {
        return `
        <tr class="table-header">
            <th width="15%">#</th>
		    <th width="37%">Crypto</th>
			<th width="38%">Price</th>
			<th id="change24" width="10%">&Delta;/24hr</th>
        </tr>
        <tr class="table-rows">
            <td>${this.btcRank}</td>
            <td>${this.btcName}</td>
            <td>${this.btcPrice}</td>
            <td align="right">${this.btc24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.ethRank}</td>
            <td>${this.ethName}</td>
            <td>${this.ethPrice}</td>
            <td align="right">${this.eth24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.xrpRank}</td>
            <td>${this.xrpName}</td>
            <td>${this.xrpPrice}</td>
            <td align="right">${this.xrp24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.ltcRank}</td>
            <td>${this.ltcName}</td>
            <td>${this.ltcPrice}</td>
            <td align="right">${this.ltc24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.xlmRank}</td>
            <td>${this.xlmName}</td>
            <td>${this.xlmPrice}</td>
            <td align="right">${this.xlm24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.linkRank}</td>
            <td>${this.linkName}</td>
            <td>${this.linkPrice}</td>
            <td align="right">${this.link24HourChange}%</td>
        </tr>
          `
    }

}
