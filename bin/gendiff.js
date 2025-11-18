#!/usr/bin/env node
import { Command } from 'commander';
import {fileURLToPath} from 'url';
import path from 'path';
import genDiff from '../src/genDiff.js';

const program = new Command();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
.name('gendiff')
.description('Compares two configuration files and shows a difference.')
.version('1.0.0')
.option('-f, --format <type>', 'output format', 'stylish')
.argument('<filepath1>')
.argument ('<filepath2>')
.action((filepath1, filepath2, option)=>{
    const resolvePath = (fp) =>{
        return path.isAbsolute(fp) 
        ? fp 
        : path.resolve(__dirname,'..', '__fixtures__',fp)
    }
    const diff = genDiff(resolvePath(filepath1), resolvePath(filepath2), option.format);
    console.log(diff);
});

program.parse();