#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/genDiff';
const program = new Command();

program
.description('Compares two configuration files and shows a difference.')
.version('1.0.0')
.option('-f, --format','[type]  output format')
.argument('<filepath1>')
.argument ('<filepath2>')
.action((filepath1, filepath2)=>{
    const data1 = parse(filepath1);
    const data2 = parse(filepath2);
    const diff = genDiff(data1, data2);
    console.log(diff);
});

program.parse();