#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

async function saveToken(token) {
    if(!token.length) {
        printError("Token wasn't send");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess("Token saved");
    } catch (e) {
        printError(e.message);
    }
     
}

async function getForecast() {
    try {
        const weather = await getWeather('London');
        console.log(weather);
    } catch (e) {
        if(e?.response?.status === 404) {
            printError("Wrong city");
        } else if(e?.response?.status === 401) {
            printError("Wrong token");
        } else {
            printError(e.message);
        }
    }

}

(async function initCLI() {
    const args = getArgs(process.argv) ;
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        //SAVE THE CITY
        // saveKeyValue('city', args.s);
    }
    if (args.t) {
        //SAVE THE TOKEN
        return saveToken(args.t);
    }
    getForecast();
})();