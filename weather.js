#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
(function initCLI() {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        //HELP
    }
    if (args.s) {
        //SAVE THE CITY
    }
    if (args.t) {
        //SAVE THE TOKEN
    }
    //SHOW THE WEATHER
})();