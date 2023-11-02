/* eslint-disable @typescript-eslint/no-explicit-any */
import chalk from 'chalk';

class Logger {
  static info(message: any) {
    console.log(chalk.bgGreen(' INFO '), chalk.green(message));
  }

  static error(message: any) {
    console.log(chalk.bgRed(' ERROR '), chalk.red(message));
  }

  static warn(message: any) {
    console.log(chalk.bgYellow(' WARNING '), chalk.yellow(message));
  }

  static debug(message: any) {
    console.log(chalk.bgBlue(' DEBUG '), chalk.blue(message));
  }

  static trace(message: any) {
    console.log(chalk.bgMagenta(' TRACE '), chalk.magenta(message));
  }

  static verbose(message: any) {
    console.log(chalk.bgCyan(' VERBOSE '), chalk.cyan(message));
  }

  static silly(message: any) {
    console.log(chalk.bgWhite(' SILLY '), chalk.white(message));
  }

  static log(message: any) {
    console.log(message);
  }
}

export default Logger;
