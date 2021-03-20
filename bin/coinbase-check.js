#!/usr/bin/env node
const program = require("commander");
const Configstore = require("configstore");
const Api = require("../lib/Api");

const store = new Configstore();
const api = new Api(store.get("API-KEY"));
program
  .command("price")
  .alias("p")
  .option(
    "--base <baseCurrency>",
    "set the base currency/s using csv defaults to 'BTC,ETH,XRP'",
    "BTC,ETH,XRP"
  )
  .option(
    "--quote <quoteCurrency>",
    "set the quote currency/s using csv defaults to 'USD'",
    "USD"
  )
  .description("Check the status of cyptocurreny price, DEFAULT:BTC")
  .action((options) => {
    api.getData(options.base, options.quote);
  });

program.parse(process.argv);
