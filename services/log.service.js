import chalk from 'chalk';
import dedent from "dedent-js";
function printError(err) {
    console.log(chalk.bgRed(' ERROR ') + ' ' + err);
}

function printSuccess(msg) {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + msg);
}

function printHelp() {
    console.log(dedent(`
        ${chalk.bgBlue(' HELP ')}
        With no parameters - showing the weather
        -s [CITY]   set city
        -h  help
        -t [API_KEY] set token
        `));
}

export {
    printError,
    printSuccess,
    printHelp
}

