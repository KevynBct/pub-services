#!/usr/bin/env node


let program = require('commander');
const _ = require('../src/main');

program
  .version('1.0.0')
  .option('-l, --list', 'Get the pubs list')
  .option('-o, --opened', 'Get the open pubs list')
  .parse(process.argv);

if (program.list) {
  console.log('Liste de tous les bars : ', _.getAllPubs());
}

if (program.opened) {
  console.log('Liste des bars ouverts : ', _.getOpenPubs());
}
