#!/usr/bin/env node
const program = require("commander");
const colors = require("colors");
const pkg = require("../package.json");

const Configstore = require("configstore");
const Api = require("../lib/Api");
const responseView = require("../utils/responseView");

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
  .action(async (options) => {
    console.info(
      `Developed by: ${pkg.author} \nVersion: ${pkg.version}\n`.cyan
    );
    const base = options.base.toUpperCase();
    const quote = options.quote.toUpperCase();
    try {
      const response = await api.getData(base, quote);
      console.info("Loading...".yellow);
      // console.info(response);
      response.map(async (coin) => {
        responseView(coin, quote);
      });
    } catch (error) {
      console.info("Error: ".yellow, error.message.red);
    }
  });

program.parse(process.argv);
