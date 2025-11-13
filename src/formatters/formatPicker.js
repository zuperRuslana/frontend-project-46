import { stylisher } from "./stylish.js";
import { plain } from "./plain.js";

const getFormatter = (formatName) =>{
    switch(formatName) {
        case 'stylish':
            return stylisher;
         case 'plain':
            return plain;
    }
};
export default getFormatter;