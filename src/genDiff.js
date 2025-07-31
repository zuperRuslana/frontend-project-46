import parse from "./parsers.js";

export default function genDiff (filepath1, filepath2){
const obj1 = parse(filepath1);
const obj2 = parse(filepath2);


const keys = [...Object.keys(obj1), ...Object.keys(obj2)];
const uniqueSortedKeys = keys.filter((item,index) => keys.indexOf(item)=== index).sort();
const result = [];
for(const key of uniqueSortedKeys){
 if(Object.prototype.hasOwnProperty.call(obj1,key) && !Object.prototype.hasOwnProperty.call(obj2, key)){
        result.push(`- ${key}: ${obj1[key]}`);
}
    else if(!Object.prototype.hasOwnProperty.call(obj1, key) && Object.prototype.hasOwnProperty.call(obj2,key)){
        result.push(`+ ${key}: ${obj2[key]}`);
     }
    else if(Object.prototype.hasOwnProperty.call(obj1,key) && Object.prototype.hasOwnProperty.call(obj2,key)){
        if (obj1[key] === obj2[key]) {
        result.push(`${key}: ${obj1[key]}`);
        }
        else {
            result.push(`- ${key}: ${obj1[key]}`);
            result.push(`+ ${key}: ${obj2[key]}`);

        }
    }
}
    return `{\n  ${result.join('\n  ')}\n}`;
    
}


