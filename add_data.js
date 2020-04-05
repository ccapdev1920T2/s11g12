// This script creates the database
// and inserts 8 user details in the collection `profiles`

// import module from `./models/db.js`
const db = require('./models/db.js');

// name of the collection (table)
// to perform CRUD (Create, Read, Update, Delete) operations
const collection = 'profiles'; //collection of users

// calls the function createDatabase()
// defined in the `database` object in `./models/db.js`
db.createDatabase();

// creates an object
// containing first name, last name, username, and bio of a user
var user = {
    name: 'Vhino Ramos',
    email: 'wendell@gmail.com',
    password: '123',
    profilepic: 'vhino.jpg',
    num: '09171907495',
    address: 'Antipolo City, Metro Manila',
    // PURCHASES
    // to receive
    toreceive: [
      {
        link: 'dove',
        productcode: 31,
        productname: 'Dove Soap',
        productcategory: 'Health',
        price: 59,
        prodimage: 'soap.png',
        quantity: 1
      },
      {
        link: 'lotion',
        productcode: 32,
        productname: 'Love, Beauty and Planet Body Lotion',
        productcategory: 'Beauty',
        price: 59,
        prodimage: 'lotion.png',
        quantity: 1
      }
    ],
    // completed
    completed: [
      {
        link: 'modess',
        productcode: 25,
        productname: 'Modess Long Napkin',
        productcategory: 'Health',
        price: 50,
        prodimage: 'modess.png',
        quantity: 1
      },
      {
        link: 'lipstick',
        productcode: 27,
        productname: 'Mac Lipstick',
        productcategory: 'Beauty',
        price: 499,
        prodimage: 'lipstick.png',
        quantity: 1
      },
      {
        link: 'oil',
        productcode: 26, 
        productname: 'Efficascent Oil',
        productcategory: 'Health',
        price: 35,
        prodimage: 'oil.png',
        quantity: 1
      }
    ],
    // cancelled
    cancelled: [
      {
        link: 'perfume',
        productcode: 30,
        productname: 'Channel No. 5 Perfume',
        productcategory: 'Beauty',
        price: 3999,
        prodimage: 'channel.png',
        quantity: 1
      }
    ],
    // returned 
    returned: [
      {
        link: 'shorts',
        productcode: '16',
        productname: 'Nike Woman Shorts',
        productcategory: 'Fitness',
        price: 250,
        prodimage: 'Fitness2.png',
        quantity: 1
      }
    ],
    // END OF PURCHASES
    // ORDER HISTORY
    history: [
      {
        link: 'modess',
        productcode: 25,
        productname: 'Modess Long Napkin',
        productcategory: 'Health',
        price: 50,
        prodimage: 'modess.png',
        quantity: 1,
        orderdate: 'Feb. 02, 2020',
        datereceived: 'Feb. 05, 2020'
      },
      {
        link: 'lipstick',
        productcode: 27,
        productname: 'Mac Lipstick',
        productcategory: 'Beauty',
        price: 499,
        prodimage: 'lipstick.png',
        quantity: 1,
        orderdate: 'Feb. 08, 2020',
        datereceived: 'Feb. 13, 2020',
      },
      {
        link: 'oil',
        productcode: 26, 
        productname: 'Efficascent Oil',
        productcategory: 'Health',
        price: 35,
        prodimage: 'oil.png',
        quantity: 1,
        orderdate: 'Feb. 10, 2020',
        datereceived: 'Feb. 15, 2020'
      }
    ]
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);

// creates an object
// containing first name, last name, username, and bio of a user
var user = {
  name: 'Kristal Ambrosio',
  email: 'kristal@gmail.com',
  password: '123',
  profilepic: 'kristal.jpg',
  num: '0917838493',
  address: 'Dasmarinas, Cavite',
  // PURCHASES
    // to receive
    toreceive: [
      {
        link: 'dove',
        productcode: 31,
        productname: 'Dove Soap',
        productcategory: 'Health',
        price: 59,
        prodimage: 'soap.png',
        quantity: 1
      },
    ],
    // completed
    completed: [
      {
        link: 'lotion',
        productcode: 32,
        productname: 'Love, Beauty and Planet Body Lotion',
        productcategory: 'Beauty',
        price: 59,
        prodimage: 'lotion.png',
        quantity: 1
      }
    ],
    // cancelled
    cancelled: [
      {
        link: 'perfume',
        productcode: 30,
        productname: 'Channel No. 5 Perfume',
        productcategory: 'Beauty',
        price: 3999,
        prodimage: 'channel.png',
        quantity: 1
      }
    ],
    // returned 
    returned: [
      {
        link: 'shorts',
        productcode: '16',
        productname: 'Nike Woman Shorts',
        productcategory: 'Fitness',
        price: 250,
        prodimage: 'Fitness2.png',
        quantity: 1
      }
    ],
    // END OF PURCHASES
    // ORDER HISTORY
    history: [
      {
        link: 'lotion',
        productcode: 32,
        productname: 'Love, Beauty and Planet Body Lotion',
        productcategory: 'Beauty',
        price: 59,
        prodimage: 'lotion.png',
        quantity: 1,
        orderdate: 'Feb. 02, 2020',
        datereceived: 'Feb. 05, 2020'
      },
      
    ]
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);

// creates an object
// containing first name, last name, username, and bio of a user
var user = {
  name: 'Justine Fernandez',
  email: 'jus@gmail.com',
  password: '123',
  profilepic: 'justine.jpg',
  num: '09996547899',
  address: 'Binondo, Manila',
   // PURCHASES
    // to receive
    toreceive: [
      {
        link: 'lotion',
        productcode: 32,
        productname: 'Love, Beauty and Planet Body Lotion',
        productcategory: 'Beauty',
        price: 59,
        prodimage: 'lotion.png',
        quantity: 1
      }
    ],
    // completed
    completed: [
      {
        link: 'modess',
        productcode: 25,
        productname: 'Modess Long Napkin',
        productcategory: 'Health',
        price: 50,
        prodimage: 'modess.png',
        quantity: 1
      },
      {
        link: 'oil',
        productcode: 26, 
        productname: 'Efficascent Oil',
        productcategory: 'Health',
        price: 35,
        prodimage: 'oil.png',
        quantity: 1
      }
    ],
    // cancelled
    cancelled: [
      {
        link: 'perfume',
        productcode: 30,
        productname: 'Channel No. 5 Perfume',
        productcategory: 'Beauty',
        price: 3999,
        prodimage: 'channel.png',
        quantity: 1
      }
    ],
    // returned 
    returned: [
      {
        link: 'shorts',
        productcode: '16',
        productname: 'Nike Woman Shorts',
        productcategory: 'Fitness',
        price: 250,
        prodimage: 'Fitness2.png',
        quantity: 1
      }
    ],
    // END OF PURCHASES
    // ORDER HISTORY
    history: [
      {
        link: 'modess',
        productcode: 25,
        productname: 'Modess Long Napkin',
        productcategory: 'Health',
        price: 50,
        prodimage: 'modess.png',
        quantity: 1,
        orderdate: 'Feb. 02, 2020',
        datereceived: 'Feb. 05, 2020'
      },
      {
        link: 'oil',
        productcode: 26, 
        productname: 'Efficascent Oil',
        productcategory: 'Health',
        price: 35,
        prodimage: 'oil.png',
        quantity: 1,
        orderdate: 'Feb. 10, 2020',
        datereceived: 'Feb. 15, 2020'
      }
    ]
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);

// creates an object
// containing first name, last name, username, and bio of a user
var user = {
  name: 'Lucifer Morningstar',
  email: 'juts@gmail.com',
  password: '123',
  profilepic: 'luci.jpg',
  num: '09956666666',
  address: 'Greendale, USA',
   // PURCHASES
    // to receive
    toreceive: [
      {
        link: 'perfume',
        productcode: 30,
        productname: 'Channel No. 5 Perfume',
        productcategory: 'Beauty',
        price: 3999,
        prodimage: 'channel.png',
        quantity: 1
      }
    ],
    // completed
    completed: [
      {
        link: 'oil',
        productcode: 26, 
        productname: 'Efficascent Oil',
        productcategory: 'Health',
        price: 35,
        prodimage: 'oil.png',
        quantity: 1
      }
    ],
    // cancelled
    cancelled: [
      {
        link: 'modess',
        productcode: 25,
        productname: 'Modess Long Napkin',
        productcategory: 'Health',
        price: 50,
        prodimage: 'modess.png',
        quantity: 1,
      },
    ],
    // returned 
    returned: [
      {
        link: 'shorts',
        productcode: '16',
        productname: 'Nike Woman Shorts',
        productcategory: 'Fitness',
        price: 250,
        prodimage: 'Fitness2.png',
        quantity: 1
      }
    ],
    // END OF PURCHASES
    // ORDER HISTORY
    history: [
      {
        link: 'oil',
        productcode: 26, 
        productname: 'Efficascent Oil',
        productcategory: 'Health',
        price: 35,
        prodimage: 'oil.png',
        quantity: 1,
        orderdate: 'Feb. 10, 2020',
        datereceived: 'Feb. 15, 2020'
      }
    ]
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);

// creates an object
// containing first name, last name, username, and bio of a user
var user = {
  name: 'RuPal Drag',
  email: 'daks@gmail.com',
  password: '123',
  profilepic: 'ru.jpg',
  num: '09154876543',
  address: 'Sashay Away, USA',
   // PURCHASES
    // to receive
    toreceive: [
      {
        link: 'dove',
        productcode: 31,
        productname: 'Dove Soap',
        productcategory: 'Health',
        price: 59,
        prodimage: 'soap.png',
        quantity: 1
      },
      {
        link: 'lotion',
        productcode: 32,
        productname: 'Love, Beauty and Planet Body Lotion',
        productcategory: 'Beauty',
        price: 59,
        prodimage: 'lotion.png',
        quantity: 1
      }
    ],
    // completed
    completed: [
      {
        link: 'modess',
        productcode: 25,
        productname: 'Modess Long Napkin',
        productcategory: 'Health',
        price: 50,
        prodimage: 'modess.png',
        quantity: 1
      },
      {
        link: 'lipstick',
        productcode: 27,
        productname: 'Mac Lipstick',
        productcategory: 'Beauty',
        price: 499,
        prodimage: 'lipstick.png',
        quantity: 1
      },
      {
        link: 'oil',
        productcode: 26, 
        productname: 'Efficascent Oil',
        productcategory: 'Health',
        price: 35,
        prodimage: 'oil.png',
        quantity: 1
      }
    ],
    // cancelled
    cancelled: [
      {
        link: 'perfume',
        productcode: 30,
        productname: 'Channel No. 5 Perfume',
        productcategory: 'Beauty',
        price: 3999,
        prodimage: 'channel.png',
        quantity: 1
      }
    ],
    // returned 
    returned: [
      {
        link: 'shorts',
        productcode: '16',
        productname: 'Nike Woman Shorts',
        productcategory: 'Fitness',
        price: 250,
        prodimage: 'Fitness2.png',
        quantity: 1
      }
    ],
    // END OF PURCHASES
    // ORDER HISTORY
    history: [
      {
        link: 'modess',
        productcode: 25,
        productname: 'Modess Long Napkin',
        productcategory: 'Health',
        price: 50,
        prodimage: 'modess.png',
        quantity: 1,
        orderdate: 'Feb. 02, 2020',
        datereceived: 'Feb. 05, 2020'
      },
      {
        link: 'lipstick',
        productcode: 27,
        productname: 'Mac Lipstick',
        productcategory: 'Beauty',
        price: 499,
        prodimage: 'lipstick.png',
        quantity: 1,
        orderdate: 'Feb. 08, 2020',
        datereceived: 'Feb. 13, 2020',
      },
      {
        link: 'oil',
        productcode: 26, 
        productname: 'Efficascent Oil',
        productcategory: 'Health',
        price: 35,
        prodimage: 'oil.png',
        quantity: 1,
        orderdate: 'Feb. 10, 2020',
        datereceived: 'Feb. 15, 2020'
      }
    ]
};

// calls the function insertOne()
// defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);
