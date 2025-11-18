import { stylisher } from "./stylish.js";
import { plain } from "./plain.js";
import { json } from "./json.js";

const getFormatter = (formatName) =>{
    switch(formatName) {
        case 'stylish':
            return stylisher;
         case 'plain':
            return plain;
        case 'json':
            return json;
        default:
            throw new Error(`Unknown format: ${formatName}`)
    }
};
export default getFormatter;