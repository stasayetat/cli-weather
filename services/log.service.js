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

function printWeather(data) {
    console.log('\n');
    console.log(dedent(`
    ${chalk.bgYellow(`Weather`)}
    ${data.weather[0].description}
    Temperature ${data.main.temp} °C
    Feels like ${data.main.feels_like} °C
    Wind force ${data.wind.speed} m/s
    City ${data.name}`));
    console.log('\n');
}

export {
    printError,
    printSuccess,
    printHelp,
    printWeather
}

