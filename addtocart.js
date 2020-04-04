// This script creates the database
// and inserts 8 user details in the collection `profiles`

// import module from `./models/db.js`
const db = require('./models/db.js');

// name of the collection (table)
// to perform CRUD (Create, Read, Update, Delete) operations
const collection = 'cart'; //collection of users

// calls the function createDatabase()
// defined in the `database` object in `./models/db.js`
db.createDatabase();

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Carmex Lip Balm',
    price: 250
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Sunglasses',
    price: 250
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Denim Dress',
    price: 250
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Bucket Hat',
    price: 100
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Mac Lipstick',
    price: 250
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Bretman Rock Shadow Palette',
    price: 700
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Vitamin C Serum',
    price: 1200
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Yoga Pants',
    price: 1200
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Jump Rope',
    price: 150
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);

// creates an object
// containing first name, last name, username, and bio of a user
var product = {
    productname: 'Sports Bra',
    price: 1250
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, product);
