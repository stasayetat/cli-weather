#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {getKeyValue, saveKeyValue} from "./services/storage.service.js";

async function saveToken(token) {
    try {
        await saveKeyValue('token', token);
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
    //SHOW THE WEATHER
})();