const axios = require("axios").default;
const colors = require("colors");

class Api {
  constructor(key) {
    this.baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${key}`;
  }

  async getData(baseCurrency, quoteCurrency) {
    try {
      const response = await axios(
        this.baseUrl +
          `&ids=${baseCurrency}&interval=1d,30d&convert=${quoteCurrency}&per-page=100&page=1`
      );
      const formatCurrency = new Intl.NumberFormat("en-US", {
        currency: quoteCurrency,
        style: "currency",
      });
      response.data.map((coin) =>
        console.info(
          `-----------------\n${coin.name.yellow} - ${coin.symbol.blue}\n${
            "Price".yellow
          }: ${formatCurrency.format(coin.price).green}\n-----------------\n`
        )
      );
    } catch (error) {
      console.error({ error: error.message });
    }
  }
}

module.exports = Api;
