import { homedir } from 'os';
import {join} from 'path';
const filePath = join(homedir(), 'weather-data.json');
function saveKeyValue(key, value) {

}

export {
    saveKeyValue
}