import { homedir } from 'os';
import {join} from 'path';
import {promises} from 'fs';
const filePath = join(homedir(), 'weather-data.json');
async function saveKeyValue(key, value) {
    let data = {};
    if(await  isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
}

async function getKeyValue(key) {
    if(await  isExist(filePath)) {
        let fileData = await promises.readFile(filePath);
        let data = JSON.parse(fileData);
        return data[key];
    }
    return undefined;
}

async function isExist(path) {
    try{
        await promises.stat(path);
        return true;
    } catch (e) {
        return false;
    }

}

export {
    saveKeyValue,
    getKeyValue
}