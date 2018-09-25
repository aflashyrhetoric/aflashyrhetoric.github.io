/*
 * This script updates nulab-inc theme's "version" in config.toml
 */
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const now = Date.now();
const filePath = path.join(__dirname, "/config.toml");

fs.readFile(filePath, "utf8", function(err, data) {
  if (err) {
    return console.log(chalk.red(err));
  }
  let result = data.replace(/version = \"\d+\"/, 'version = "' + now + '"');
  fs.writeFile(filePath, result, "utf8", function(err) {
    if (err) {
      return console.log(chalk.red(err));
    }
    console.log(chalk.bold("Updated the theme version: "), chalk.green(now));
  });
});
