#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {getKeyValue, saveKeyValue, tokenDictionary} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

async function saveToken(token) {
    if(!token.length) {
        printError("Token wasn't send");
        return;
    }
    try {
        await saveKeyValue(tokenDictionary.token, token);
        printSuccess("Token saved");
    } catch (e) {
        printError(e.message);
    }
     
}

(function initCLI() {
    const args = getArgs(process.argv);
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
    getWeather('London');
})();