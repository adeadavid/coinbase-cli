#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");

program.version(pkg.version).description(pkg.description);

program
  .command("key", "SET, GET AND REMOVE API Key")
  .alias("k")
  .command("check", "Get the current rate of cyptocurrencies")
  .alias("c")
  .parse(process.argv);
