const formatCurrency = require("./formatCurrency");

function responseView(coin, logo, quote) {
  console.info(
    `---------------------------------------------------\n${logo}\n${
      coin.name.yellow
    }: ${coin.symbol.cyan} (${coin.rank.green})\n${"Price".yellow}: ${
      formatCurrency(coin.price, quote).green
    }\n${"High".yellow}: ${formatCurrency(coin.high, quote).green}\n${
      "1 Day Price change".yellow
    }: ${formatCurrency(coin["1d"].price_change, quote).green} (${
      coin["1d"].price_change_pct.green
    }${"%".green})\n${"30 Days Price change".yellow}: ${
      formatCurrency(coin["30d"].price_change, quote).green
    } (${coin["30d"].price_change_pct.green}${
      "%".green
    })\n---------------------------------------------------\n`
  );
}

module.exports = responseView;
