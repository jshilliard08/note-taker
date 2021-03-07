const util = require('util');
const fs = require('fs')

//This package will be used to generate a unique ID.
//const uuidv = require('uuid');
const { v4: uuidv4 } = require('uuid');
uuidv4();
//const uuidv4 = require('uuidv4');

module.exports = function(request){
      return newNote = {
         "title": request.title,
         "text": request.text,
         "id": uuidv4()
   }
}

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync= util.promisify(fs.writeFile);

//Create class
class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    //create a function to getNotes
    //create a function to addNotes
    //create a function to removeNotes by ID
}

//export new store

module.exports = new Store()