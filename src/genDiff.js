import parse from "./parsers.js";
import buildDiff from './buildDiff.js';
import getFormatter from './formatters/formatPicker.js';

export default function genDiff (filepath1, filepath2, formatName = 'stylish'){

const obj1 = parse(filepath1);
const obj2 = parse(filepath2);

const diff = buildDiff(obj1, obj2);

const format = getFormatter(formatName);
return format(diff);
}
