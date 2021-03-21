const formatCurrency = require("./formatCurrency");

function responseView(coin, logo, quote) {
  console.info(
    `---------------------------------------------------\n${logo}\n${
      coin.name.yellow
    }: ${coin.symbol.cyan} (${coin.rank.green})\n${"Price".yellow}: ${
      formatCurrency(coin.price, quote).green
    }\n${"High".yellow}: ${formatCurrency(coin.high, quote).green}\n${
      "1 Day Price change".yellow
    }: ${
      coin["1d"].price_change >= 0
        ? formatCurrency(coin["1d"].price_change, quote).green
        : formatCurrency(coin["1d"].price_change, quote).red
    } (${
      coin["1d"].price_change_pct >= 0
        ? coin["1d"].price_change_pct.green
        : coin["1d"].price_change_pct.red
    }${coin["1d"].price_change_pct >= 0 ? "%".green : "%".red})\n${
      "30 Days Price change".yellow
    }: ${
      coin["30d"].price_change >= 0
        ? formatCurrency(coin["30d"].price_change, quote).green
        : formatCurrency(coin["30d"].price_change, quote).red
    } (${
      coin["30d"].price_change_pct >= 0
        ? coin["30d"].price_change_pct.green
        : coin["30d"].price_change_pct.red
    }${
      coin["30d"].price_change_pct >= 0 ? "%".green : "%".red
    })\n---------------------------------------------------\n`
  );
}

module.exports = responseView;
