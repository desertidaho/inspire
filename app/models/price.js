export default class Price {
    constructor(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == 'bitcoin') {
                this.btcRank = data[i].rank
                this.btcName = data[i].name
                this.btcPrice = '$' + Number(data[i].priceUsd).toFixed(2)
                this.btc24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
                if (this.btc24HourChange >= 0) {
                    this.btc24HourChange = '+' + this.btc24HourChange
                }
            }
            if (data[i].id == 'ethereum') {
                this.ethRank = data[i].rank
                this.ethName = data[i].name
                this.ethPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.eth24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
                if (this.eth24HourChange >= 0) {
                    this.eth24HourChange = '+' + this.eth24HourChange
                }
            }
            if (data[i].id == 'ripple') {
                this.xrpRank = data[i].rank
                this.xrpName = data[i].name
                this.xrpPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.xrp24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
                if (this.xrp24HourChange >= 0) {
                    this.xrp24HourChange = '+' + this.xrp24HourChange
                }
            }
            if (data[i].id == 'litecoin') {
                this.ltcRank = data[i].rank
                this.ltcName = data[i].name
                this.ltcPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.ltc24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
                if (this.ltc24HourChange >= 0) {
                    this.ltc24HourChange = '+' + this.ltc24HourChange
                }
            }
            if (data[i].id == 'chainlink') {
                this.linkRank = data[i].rank
                this.linkName = data[i].name
                this.linkPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.link24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
                if (this.link24HourChange >= 0) {
                    this.link24HourChange = '+' + this.link24HourChange
                }
            }
            if (data[i].id == 'polkadot') {
                this.dotRank = data[i].rank
                this.dotName = data[i].name
                this.dotPrice = '$' + Number(data[i].priceUsd).toFixed(2);
                this.dot24HourChange = Number(data[i].changePercent24Hr).toFixed(2)
                if (this.dot24HourChange >= 0) {
                    this.dot24HourChange = '+' + this.dot24HourChange
                }
            }
        }

        this.marketCapUsd = 0
        for (let i = 0; i < data.length; i++) {
            this.marketCapUsd += parseInt(Number(data[i].marketCapUsd).toFixed())
        };
        this.marketCapUsd = this.marketCapUsd + 5000000000
        this.mcap = this.marketCapUsd
        this.marketCapUsd = ('$' + this.marketCapUsd).slice(0, 4) + '.' + ('' + this.marketCapUsd).slice(3, 5) + ' Billion'
    }

    marketCapTemplate() {
        return `
        ${this.marketCapUsd}
        `
    }

    mCap() {
        return this.mcap
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
            <td id="btc-price">${this.btcPrice}</td>
            <td align="right">${this.btc24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.ethRank}</td>
            <td>${this.ethName}</td>
            <td>${this.ethPrice}</td>
            <td align="right">${this.eth24HourChange}%</td>
        </tr>
        <tr class="table-rows">
            <td>${this.dotRank}</td>
            <td>${this.dotName}</td>
            <td>${this.dotPrice}</td>
            <td align="right">${this.dot24HourChange}%</td>
        </tr>
          `
    }

}
