#!/usr/bin/env node
const program = require("commander");
const inquirer = require("inquirer");
const Key = require("../lib/Key");
const key = new Key();
program
  .command("set")
  .alias("s")
  .description("Set API key")
  .action(async () => {
    const respond = await inquirer.prompt([
      { type: "input", name: "key", message: "Enter API KEY:".green },
    ]);
    key.set(respond.key);
    process.exit();
  });

program
  .command("get")
  .alias("g")
  .description("Get API key")
  .action(() => {
    key.get("API-KEY");
    process.exit();
  });

program
  .command("remove")
  .alias("rm")
  .description("Remove API key")
  .action(() => {
    key.delete("API-KEY");
    process.exit();
  });

program.parse(process.argv);
