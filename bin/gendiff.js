#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
.description('Compares two configuration files and shows a difference.')
.version('1.0.0')
.option('-f, --format','[type]  output format')
.argument('<filepath1>')
.argument ('<filepath2>');

program.parse();