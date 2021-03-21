#!/usr/bin/env node
const program = require("commander");
const colors = require("colors");
const pkg = require("../package.json");

const Configstore = require("configstore");
const Api = require("../lib/Api");
const convertImage = require("../utils/convertImage");

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

    try {
      const response = await api.getData(
        options.base.toUpperCase(),
        options.quote.toUpperCase()
      );
      console.info("Loading...".yellow);
      // console.info(response);
      response.map(async (coin) => {
        convertImage(coin, options.quote.toUpperCase());
      });
    } catch (error) {
      console.info("Error: ".yellow, error.message.red);
    }
  });

program.parse(process.argv);
