// const _ = require('lodash');
const fs = require('fs');
const yargv = require('yargs');

const notes = require('./note');


const argv = yargv.argv;
var note  = argv._[0];
console.log(note);

// var note = process.argv[2];

if (note === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (note === 'remove') {
    notes.removeNote(argv.title);
} else if (note === 'get') {
    notes.getNote();
}
