#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {printHelp, printSuccess, printError, printWeather} from "./services/log.service.js";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";
import dedent from "dedent-js";

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

async function saveCity(city) {
    if(!city.length) {
        printError("City wasn't send");
        return;
    }
    try {
        const cityCheck = await getWeather(city);
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess("City saved");
    } catch (e) {
        if(e?.response?.status === 404) {
            printError("City not found");
            return;
        }
        printError(e.message);
    }
}



async function getForecast() {
    try {
        const weather = await getWeather(await getKeyValue('city'));
        //console.log(weather);
        printWeather(weather);
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
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    await getForecast();
})();