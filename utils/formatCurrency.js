function formatCurrency(price, currency) {
  const value = new Intl.NumberFormat("en-US", {
    currency,
    style: "currency",
  });
  return value.format(price);
}

module.exports = formatCurrency;
