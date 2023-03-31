#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {printHelp} from "./services/log.service.js";
import {saveKeyValue} from "./services/storage.service.js";
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
        saveKeyValue('token', args.t);
    }
    //SHOW THE WEATHER
})();