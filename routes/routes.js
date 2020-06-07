const multer = require('multer');
const multers3 = require('multer-s3');
const aws = require('aws-sdk');
const path = require('path')
const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS,
    Bucket: 'onclick'
})

const upload = multer({
    storage: multers3({
        s3: s3,
        bucket: 'onclick',
        acl: 'public-read',
        key: function(req, file, cb) {
            cb(null, file.originalname)
        }
    }),
    fileFilter: function (req, file, cb){
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if(mimetype && extname){
            return cb(null, true);
        }
        else{
           return cb(null, false);
        }
    }
});

// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

const app = express();

app.get('/', controller.getHomepage);

app.get('/homepage', controller.getHomepage);

app.get('/aboutus', controller.getAboutUs);

app.get('/boss', controller.getBoss);

app.get('/checkEmail', controller.getCheckEmail);

app.get('/login', controller.getLogin);

app.post('/login', controller.postLogin);

app.get('/logout', controller.getLogout);

app.get('/search', controller.getSearch);

app.get('/signup', controller.getSignup);

app.get('/profile', controller.getProfile);

app.get('/contactus', controller.getContactUs);

app.get('/unavailable', controller.getUnavailable);

app.get('/categories', controller.getCategories);

app.get('/promos', controller.getPromos);

app.get('/newrelease', controller.getNewRelease);

app.get('/cart', controller.getCart);

app.get('/wishlist', controller.getWishlist);

app.get('/checkout', controller.getCheckout);

app.get('/products', controller.getProducts);

app.get('/checkLogged', controller.getLogged);

app.get('/checkReview', controller.getReview);

app.get('/checkBought', controller.getBought);

app.get('/addCart', controller.getAddCart);

app.get('/addWishlist', controller.getAddWishlist);

app.get('/deleteCart', controller.getDeleteCart);

app.get('/deleteWishlist', controller.getDeleteWishlist);

app.get('/getTotal', controller.getTotal);

app.get('/checkpassword', controller.getCheckPassword);

app.get('/checkid', controller.getCheckId);

app.get('/checkname', controller.getCheckname)

app.get('/receive', controller.getReceive);

app.get('/return', controller.getReturn)

app.get('/nextday', controller.getNextday);

app.post('/profile', controller.postProfile);

app.post('/signup', upload.single('img'), controller.postSignup)

app.post('/products', controller.postProducts)

app.post('/checkout', controller.postCheckout)


module.exports = app;
