#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {printHelp} from "./services/log.service.js";
(function initCLI() {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        //SAVE THE CITY
    }
    if (args.t) {
        //SAVE THE TOKEN
    }
    //SHOW THE WEATHER
})();