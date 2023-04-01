import https from 'https';
import {getKeyValue, tokenDictionary} from "./storage.service.js";
import {} from 'axios';

async function getWeather(city) {
    const token = await getKeyValue(tokenDictionary.token);
    if(!token) {
        throw new Error("Token undefined");
    }
    let res = await fetch('https://api.openweathermap.org/data/2.5/weather?' + new URLSearchParams({
        q: city,
        appid: token,
        units: 'metric',
        lang: 'ua'
    })).then(res => res.json());
    return res;
}

export {
    getWeather
}