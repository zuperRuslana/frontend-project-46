import fs from 'fs';
import path from 'path';
import buildDiff from './buildDiff.js';
import { fileURLToPath } from 'url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);
const filepath1 = path.join(__dirname, '../__fixtures__', 'nested1.json');
const filepath2 = path.join(__dirname, '../__fixtures__', 'nested2.json');
const data1 = JSON.parse(fs.readFileSync(filepath1, 'utf-8'));
const data2 = JSON.parse(fs.readFileSync(filepath2, 'utf-8'));
console.log('file1 loaded:', filepath1);
console.log('file2 loaded:', filepath2);
console.log('buildDiff test started');

console.log(JSON.stringify(buildDiff(data1,data2), null, 2))