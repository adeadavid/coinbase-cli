#!/usr/bin/env node
const program = require("commander");
const colors = require("colors");
const fs = require("fs");
const terminalImage = require("terminal-image");
const path = require("path");
const svg2img = require("svg2img");

const Configstore = require("configstore");
const Api = require("../lib/Api");
const formatCurrency = require("../utils/formatCurrency");
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
    console.info("Developed by: Adegorite Afolabi David".cyan);
    try {
      const response = await api.getData(options.base, options.quote);
      console.info("Loading...".yellow);
      // console.info(response);
      response.map(async (coin) => {
        convertImage(coin, options.quote);
      });
    } catch (error) {
      console.info("Error: ".yellow, error.message.red);
    }
  });

program.parse(process.argv);
