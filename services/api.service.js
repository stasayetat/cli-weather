import https from 'https';
import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";
import axios from 'axios';

async function getWeather(city) {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if(!token) {
        throw new Error("Token undefined");
    }
    let {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
                q: city,
                appid: token,
                units: 'metric',
                lang: 'ua'
        }
    });
    return data;
}

export {
    getWeather
}