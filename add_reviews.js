// This script creates the database
// and inserts 8 user details in the collection `profiles`

// import module from `./models/db.js`
const db = require('./models/db.js');

// name of the collection (table)
// to perform CRUD (Create, Read, Update, Delete) operations
const collection = 'reviews'; //collection of users

// calls the function createDatabase()
// defined in the `database` object in `./models/db.js`
db.createDatabase();

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'Kristal Ambrosio',
    productname: 'Carmex Lip Balm',
    price: 250,
    review: 'I really liked this lip balm. Very moisturizing.',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'Justine Fernandez',
    productname: 'Sunglasses',
    price: 250,
    review: 'It is so retro! I super like it!!',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'Justine Fernandez',
    productname: 'Denim Dress',
    price: 250,
    review: 'The dress is super comfortable and flowy. I love the way it look on me.',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'RuPaul Drag',
    productname: 'Bucket Hat',
    price: 100,
    review: 'It does not fit on my head so I gave it to my dog',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'Kristal Ambrosio',
    productname: 'Mac Lipstick',
    price: 250,
    review: 'I dont like the shade. What the hell is this',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'RuPaul Drag',
    productname: 'Bretman Rock Shadow Palette',
    price: 700,
    review: 'Super love the colors! I FEEL LIKE A BAD BIH ;) WILL DEF RECOMMEND',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'Vhino Ramos',
    productname: 'Vitamin C Serum',
    price: 1200,
    review: 'I like the smell but not very effective on my face.',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'Kristal Ambrosio',
    productname: 'Yoga Pants',
    price: 1200,
    review: 'Fits me well! Time to get in shape to achieve that summer bod!',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'Lucifer Morningstar',
    productname: 'Jump Rope',
    price: 150,
    review: 'Very nice. I like it.',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);

// creates an object
// containing first name, last name, username, and bio of a user
var review = {
    user: 'Lucifer Morningstar',
    productname: 'Sports Bra',
    price: 1250,
    review: 'Gave this to my gf. She said she likes it so much',
    status: 'Received'
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, review);
