
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');
const loginController = require('../controllers/loginController.js');
const signupController = require('../controllers/signupController.js');
const categoryController = require('../controllers/categoryController.js');
const contactusController = require('../controllers/contactusController.js');
const unavailableController = require('../controllers/unavailableController.js');
const promosController = require('../controllers/promosController.js');
const newreleaseController = require('../controllers/newreleaseController.js');
const profileController = require('../controllers/profileController.js');
const cartController = require('../controllers/cartController.js');
const productController = require('../controllers/productController.js');
const aboutusController = require('../controllers/aboutusController.js');
const bossController = require('../controllers/bossController.js');


const app = express();

app.get('/', controller.getHomepage);

app.get('/homepage', controller.getHomepage);

app.get('/aboutus', aboutusController.getAboutUs);

app.get('/boss', bossController.getBoss);

app.get('/login', loginController.getProfile);

app.post('/login', loginController.postLogin);

app.get('/signup', signupController.getSignup);

app.get('/profile', profileController.getProfile);

app.get('/contactus', contactusController.getContactUs);

app.get('/unavailable', unavailableController.getUnavailable);

app.get('/beauty', categoryController.getBeauty);

app.get('/fitness', categoryController.getFitness);

app.get('/fashion', categoryController.getFashion);

app.get('/health', categoryController.getHealth);

app.get('/promos', promosController.getPromos);

app.get('/newrelease', newreleaseController.getNewRelease);

app.get('/cart', cartController.getCart);

// HOMEPAGE PRODUCTS
app.get('/shorts', productController.getShorts);

app.get('/modess', productController.getModess);

app.get('/oil', productController.getOil);

app.get('/lipstick', productController.getLipstick);

app.get('/swim', productController.getSwim);

app.get('/shampoo', productController.getShampoo);

app.get('/perfume', productController.getPerfume);

app.get('/dove', productController.getDove);

app.get('/lotion', productController.getLotion);
// END OF HOMEPAGE PRODUCTS

// BEAUTY PRODUCTS
app.get('/carmex', productController.getCarmex);

app.get('/marcjacobs', productController.getMarcJacobs);

app.get('/maclipstick', productController.getMacLipstick);

app.get('/brpalette', productController.getBRPalette);

app.get('/serum', productController.getSerum);
// END OF BEAUTY PRODUCTS

// FITNESS PRODUCTS
app.get('/yogapants', productController.getYogaPants);

app.get('/tumbler', productController.getTumbler);

app.get('/jumprope', productController.getJumpRope);

app.get('/whey', productController.getWhey);

app.get('/sportsbra', productController.getSportsBra);
// END OF FITNESS PRODUCTS

// FASHION PRODUCTS
app.get('/dress', productController.getDress);

app.get('/stripes', productController.getStripes);

app.get('/buckethat', productController.getBucketHat);

app.get('/sweater', productController.getSweater);

app.get('/poloshirt', productController.getPoloShirt);
// END OF FASHION PRODUCTS

// HEALTH PRODUCTS
app.get('/collagen', productController.getCollagen);

app.get('/keto', productController.getKeto);

app.get('/tums', productController.getTums);

app.get('/goli', productController.getGoli);

app.get('/honey', productController.getHoney);
// END OF HEALTH PRODUCTS

// NEW RELEASE PRODUCTS
app.get('/nike', productController.getWindbreaker);

app.get('/victoria', productController.getVictoria);

app.get('/sunglasses', productController.getSunglasses);
// END OF NEW RELEASE PRODUCTS


// exports the object `app` (defined above)
// when another script exports from this file
module.exports = app;
