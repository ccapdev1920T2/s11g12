// This script creates the database
// and inserts 8 user details in the collection `profiles`

// import module from `./models/db.js`
const db = require('./models/db.js');

// name of the collection (table)
// to perform CRUD (Create, Read, Update, Delete) operations
const collection = 'transaction'; //collection of users

// calls the function createDatabase()
// defined in the `database` object in `./models/db.js`
db.createDatabase();

// creates an object
// containing first name, last name, username, and bio of a user
var trans = {
    user: 'Vhino Ramos',
    totalprice: 1500,
    status: 'TR'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, trans);

var trans = {
    user: 'Kristal Ambrosio',
    totalprice: 600,
    status: 'TR'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, trans);

var trans = {
    user: 'Justine Fernandez',
    totalprice: 500,
    status: 'TR'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, trans);

var trans = {
    user: 'Lucifer Morningstar',
    totalprice: 3000,
    status: 'TR'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, trans);

var trans = {
    user: 'RuPaul Drag',
    totalprice: 10000,
    status: 'TR'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, trans);