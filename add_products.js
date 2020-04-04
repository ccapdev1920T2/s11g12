
const db = require('./models/db.js');

const collection = 'products';

db.createDatabase();

var product = {
    productcode: 1,
    productname: 'Carmex Lip Balm',
    productcategory: 'Beauty',
    price: 250,
    prodimage: 'carmex.png',
    quantity: 1,
};

db.insertOne(collection, product);

var product = {
    productcode: 2,
    productname: 'Marc Jacobs Mascara',
    productcategory: 'Beauty',
    price: 1500,
    prodimage: 'MJMascara.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 3,
    productname: 'Bretman Rock Shadow Palette',
    productcategory: 'Beauty',
    price: 700,
    prodimage: 'brpalette.png',
    quantity: 1 
};

db.insertOne(collection, product);

var product = {
    productcode: 4,
    productname: 'Bucket Hat',
    productcategory: 'Fashion',
    price: 100,
    prodimage: 'buckethat.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 5,
    productname: 'Vitamin C Serum',
    productcategory: 'Beauty',
    price: 250,
    prodimage: 'serum.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 6,
    productname: 'Mac Lipstick',
    productcategory: 'Beauty',
    price: 800,
    prodimage: 'maclipstick.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 7,
    productname: 'Yoga Pants',
    productcategory: 'Fitness',
    price: 1200,
    prodimage: 'yogapants.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 8,
    productname: 'BlenderBottle Shaker',
    productcategory: 'Fitness',
    price: 400,
    prodimage: 'tumbler.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 9,
    productname: 'Jump Rope',
    productcategory: 'Fitness',
    price: 150,
    prodimage: 'jumprope.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 10,
    productname: 'Just Melon Milk Whey Protein (454g) ',
    productcategory: 'Fitness',
    price: 900,
    prodimage: 'whey.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 11,
    productname: 'Sports Bra',
    productcategory: 'Fitness',
    price: 1200,
    prodimage: 'sportsbra.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 12,
    productname: 'Denim Dress',
    productcategory: 'Fashion',
    price: 250,
    prodimage: 'dress.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 13,
    productname: 'Stripes Shirt',
    productcategory: 'Fashion',
    price: 250,
    prodimage: 'stripes.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 14,
    productname: 'Grey Sweater',
    productcategory: 'Fashion',
    price: 450,
    prodimage: 'sweater.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 15,
    productname: 'Beige Polo Shirt',
    productcategory: 'Fashion',
    price: 350,
    prodimage: 'poloshirt.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: '16',
    productname: 'Nike Woman Shorts',
    productcategory: 'Fitness',
    price: 250,
    prodimage: 'Fitness2.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 17,
    productname: 'Collagen',
    productcategory: 'Health',
    price: 950,
    prodimage: 'collagen.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 18,
    productname: 'Exogenous Ketone Base',
    productcategory: 'Health',
    price: 850,
    prodimage: 'keto.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 19,
    productname: 'Tums Antacid Chewable Tablets',
    productcategory: 'Health',
    price: 900,
    prodimage: 'tums.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 20,
    productname: 'Apple Cider Vinegar Gummies',
    productcategory: 'Health',
    price: 600,
    prodimage: 'goli.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 21, 
    productname: 'Honey',
    productcategory: 'Health',
    price: 250,
    prodimage: 'honey.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 22,
    productname: 'Nike Windbreaker',
    productcategory: 'Fashion',
    price: 850,
    prodimage: 'nike.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 23,
    productname: 'Victorias Secret Perfume',
    productcategory: 'Beauty',
    price: 950,
    prodimage: 'victoria.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 24,
    productname: 'Sunglasses',
    productcategory: 'Fashion',
    price: 750,
    prodimage: 'sunglasses.png',
    quantity: 1
};

db.insertOne(collection, product);


var product = {
    productcode: 25,
    productname: 'Modess Long Napkin',
    productcategory: 'Health',
    price: 50,
    prodimage: 'modess.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 26, 
    productname: 'Efficascent Oil',
    productcategory: 'Health',
    price: 35,
    prodimage: 'oil.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 27,
    productname: 'Mac Lipstick',
    productcategory: 'Beauty',
    price: 499,
    prodimage: 'lipstick.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 28,
    productname: 'Red Sexy Swimsuit',
    productcategory: 'Fitness',
    price: 399,
    prodimage: 'swim.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 29,
    productname: 'Head and Shoulders Shampoo',
    productcategory: 'Health',
    price: 100,
    prodimage: 'shampoo.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 30,
    productname: 'Channel No. 5 Perfume',
    productcategory: 'Beauty',
    price: 3999,
    prodimage: 'channel.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 31,
    productname: 'Dove Soap',
    productcategory: 'Health',
    price: 59,
    prodimage: 'soap.png',
    quantity: 1
};

db.insertOne(collection, product);

var product = {
    productcode: 32,
    productname: 'Love, Beauty and Planet Body Lotion',
    productcategory: 'Beauty',
    price: 59,
    prodimage: 'lotion.png',
    quantity: 1
};

db.insertOne(collection, product);