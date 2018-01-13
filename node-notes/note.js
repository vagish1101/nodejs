console.log('Note started');
const fs = require('fs');

var fetchNote = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));        
    } catch (e) {
       return [] ;
    }
};

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    debugger;
    var notes = fetchNote();
    // var notes = [];
    var note = {
        title,
        body
    };
    // try {
    //     notes = JSON.parse(fs.readFileSync('notes-data.json'));        
    // } catch (e) {

    // }
    var duplicatesNotes = notes.filter((note) => note.title === title );
    if (duplicatesNotes.length === 0) {
        notes.push(note);    
    }
    // fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    saveNote(notes)
    
};

var removeNote = (title) => {
    var notes = fetchNote() ;
    var removedNote =  notes.filter((note) => {
        return note.title !== title;
    })
    saveNote(removedNote);
};  

var getNote = () => {
};
var getAll = () => {

};

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll
}
