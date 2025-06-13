const chalk = require('chalk');

function showMessage() {
  console.log(chalk.green.bold('message colored'));
}

module.exports = showMessage;
