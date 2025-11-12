import { stylisher } from "./stylish.js";

const getFormatter = (formatName) =>{
    switch(formatName) {
        case 'stylish':
            return stylisher;
    }
};
export default getFormatter;