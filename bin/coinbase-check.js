#!/usr/bin/env node
const program = require("commander");

program
  .command("price")
  .alias("p")
  .description("Check the status of cyptocurreny price, DEFAULT:BTC")
  .action(() => console.info("fROM CKECK PRICE"));

program.parse(process.argv);
