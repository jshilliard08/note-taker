const util = require('util');

//This package will be used to generate a unique ID.
const uuidvl = require('uuid');

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