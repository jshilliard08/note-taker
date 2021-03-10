const util = require('util');
const fs = require('fs');

//This package will be used to generate a unique ID.
//const uuidv = require('uuid');
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());


//const uuidv4 = require('uuidv4');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync= util.promisify(fs.writeFile);

//Create class
class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8');
    }

    write(note) {

        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    //create a function to getNotes
    getNotes() {
        return this.read().then(notes => {
            let notesList;
            try { 
                notesList = [].concat(JSON.parse(notes));
            }
            catch (err) {
                notesList = [];
            }
            return notesList;
        }
        )}
    //create a function to addNotes
    addNotes(note) {
        const { title, text } = note; 
        const id = uuidv4();
        console.log(id)
        const userNote = { title, text, id}
        return this.getNotes()
        .then(notes => [...notes, userNote])
        .then(newNotes => this.write(newNotes))
        .then(() => userNote)
    }
    
    //create a function to removeNotes BY ID (you cannot do this without getting uuiv to work)
    removeNotes(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== (id)))
        .then(deletedNotes => this.write(deletedNotes))
     }
    }

//export new store

module.exports = new Store()