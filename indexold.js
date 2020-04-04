// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

// Creates the express application
const app = express();
const port = 9090;

/**
  Creates an engine called "hbs" using the express-handlebars package.
**/
app.engine( 'hbs', exphbs({
  extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
  defaultView: 'homepage', // this is the default value but you may change it to whatever you'd like
  //layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
  partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
  // Additional helpers declared to reformat text prior to rendering
  helpers: {
    cap: function(text) { return text.toUpperCase(); },
    em: function(text) {
      var x = `<em>${text}</em>`;
      /**
        handlebars and express-handlebars are 2 different packages.
        express-handlebars basically is a wrapper to make it shorter to write handlebars code
        in express apps.

        the SafeString function is not available in express-handlebars so we need to install
        and use the main handlebars package to access the function.
      **/
      return new handlebars.SafeString(x);
    },
    exempt: function(value) {
      var text;
      if (value) {
        value = 'Unlimited free cuts!';
      } else {
        value = 'Check attendance...';
      }

      return value;
    }
  }
}));

// Setting the view engine to the express-handlebars engine we created
app.set('view engine', 'hbs');



app.get('/homepage', function(req, res) { //HOMEPAGE
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('homepage', {
      title: 'HOME',
    })

    app.get('Fitness2.png', function(req,res){

  res.sendFile(__dirname + '/images');
});

});

app.get('/contactus', function(req, res) { //CONTACT US
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('contactus', {
      title: 'CONTACT US',
    })

    app.get('slider1.png', function(req,res){

  res.sendFile(__dirname + '/images');

});

});

app.get('/beauty', function(req, res) {
    res.render('beauty', {
      title: 'Ganda ka Teh? ♡ Beauty',
      prod1: 'carmex.png',
      prod2: 'MJMascara.png',
      prod3: 'maclipstick.png',
      prod4: 'brpalette.png',
      prod5: 'serum.png'
    });
});

app.get('/fitness', function(req, res) {
    res.render('fitness', {
      title: 'Ganda ka Teh? ♡ Fitness',
      prod1: 'yogapants.png',
      prod2: 'tumbler.png',
      prod3: 'jumprope.png',
      prod4: 'whey.png',
      prod5: 'sportsbra.png'
    });
});

app.get('/fashion', function(req, res) {
    res.render('fashion', {
      title: 'Ganda ka Teh? ♡ Fashion',
      prod1: 'dress.png',
      prod2: 'stripes.png',
      prod3: 'buckethat.png',
      prod4: 'sweater.png',
      prod5: 'poloshirt.png'
    });
});

app.get('/health', function(req, res) {
    res.render('health', {
      title: 'Ganda ka Teh? ♡ Health',
      prod1: 'collagen.png',
      prod2: 'keto.png',
      prod3: 'tums.png',
      prod4: 'goli.png',
      prod5: 'honey.png'
    });
});

app.get('/promos', function(req, res) {
    res.render('promos', {
      title: 'Ganda ka Teh? ♡ Promos',
      prod1: 'promos1.png',
      prod2: 'promos2.png',
      prod3: 'promos3.png'
    });
});

app.get('/newrelease', function(req, res) {
    res.render('newrelease', {
      title: 'Ganda ka Teh? ♡ New Releases',
      prod1: 'nike.png',
      prod2: 'victoria.png',
      prod3: 'sunglasses.png'
    });
});

app.get('/login', function(req, res) {
    res.render('login', {
      title: 'Ganda Ka Teh? | Log In',
    });
});


app.get('/profile', function(req, res) { //LOGIN
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template

    app.get('soap.png', function(req,res){

    res.sendFile(__dirname + '/images');
});

});


app.get('/cart', function(req, res) { //LOGIN
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('cart', {
      title: 'MY CART',
    })

    app.get('soap.png', function(req,res){

    res.sendFile(__dirname + '/images');
});
});

// BEAUTY PRODUCTS
app.get('/carmex', function(req, res) { // not working idk why
    res.render('products', {
      title: 'Carmex Lip Balm',
      img: 'carmex.png',
      desc: 'A convenient squeezable medicated lip balm to soothe and protect dry, chapped lips.' +
            'Provides long-lasting protective barrier to help promote healing.' +
            'Glides on smoothly to help soften and hydrate lips with moisturizing cocoa butter.' +
            'Cools and soothes lips with camphor and menthol.',
      rating: '2k Ratings',
      numsold: '1.2k Sold'


    });
});

app.get('/marcjacobs', function(req, res) {
    res.render('products', {
      title: 'Marc Jacobs Mascara',
      img: 'MJMascara.png',
      desc: 'Experience ultimate volume and the look of thick, false lashes with Velvet Noir Major Volume Mascara. ' +
            'The lash-maximizing, curvy brush places the most volume at the hard-to-reach center lash line, ' +
            'and the defining tip styles lashes for major drama. The super-concentrated black pigment delivers ' +
            'the greatest visual impact, and the Flash Volume Complex™ creates instant, smudge-proof length and ' +
            'volume in three strokes or less. Velvet Noir gives you the thickest lashes in one sweep.',
      rating: '2.1k Ratings',
      numsold: '3k Sold'
    });
});

app.get('/maclipstick', function(req, res) {
    res.render('products', {
      title: 'Mac Lipstick',
      img: 'maclipstick.png',
      desc: 'Feel powerful and fresh with the new MAC Lipstick in the shade Ruby Woo.',
      rating: '1.3k Ratings',
      numsold: '1k Sold'
    });
});

app.get('/brpalette', function(req, res) {
    res.render('products', {
      title: 'Bretman Rock Shadow Palette',
      img: 'brpalette.png',
      desc: 'Experiment and express yourself with the jungle-inspired shadow palette designed by Bretman Rock. ' +
            'This bold, bigger than life palette consists of 15 wildly savage shades in a mix of bold and neutral ' +
            'colors with satin, matte, metallic and shimmer finishes. All vibrant mattes are paired with shimmer, ' +
            'metallic finishes that allow you to create unlimited roaring eye looks. The powerfully pigmented, ' +
            'buttery-soft shades glide on easily and blend seamlessly, leaving no creases behind. The smooth formula ' +
            'provides optimum texture and comfortable all-day wear. Each shade can be used either wet or dry, to deliver ' +
            'a bold, yet dangerously captivating look.',
      rating: '5.3k Ratings',
      numsold: '6k Sold'

    });
});

app.get('/serum', function(req, res) {
    res.render('products', {
      title: 'Vitamin C Serum',
      img: 'serum.png',
      desc: 'Enriched with vitamin C and niacinamide; lightens skin to minimize the look of spots and blemishes; ' +
            'highly concentrated antioxidant formula fights free radicals and prevents oxidation; protects as it ' +
            'helps repair skin damaged by acne and sun exposure; soothes, hydrates, and nourishes with vitamin E ' +
            'and aloe vera',
      rating: '2.7k Ratings',
      numsold: '3.1k Sold'
    });
});
// END OF BEAUTY PRODUCTS


// FITNESS PRODUCTS
app.get('/yogapants', function(req, res) {
    res.render('products', {
      title: 'Yoga Pants',
      img: 'yogapants.png',
      desc: 'Get all the support you need with a fit that slims, conforms, and contours with each pose and movement.' +
            ' It features an ankle-length style that elongates legs, high-waist active elastic waistband that stays in place ' +
            'and looks flattering on any figure, while stretch fabric offers enough thickness and breathability.',
      rating: '1.5k Ratings',
      numsold: '2.2k Sold'
    });
});

app.get('/tumbler', function(req, res) {
    res.render('products', {
      title: 'BlenderBottle Shaker',
      img: 'tumbler.png',
      desc: 'A state-of-the-art shaker. Leak-proof and highly secure; built with a masterful mixing system, ' +
            'namely the the BlenderBall® wire whisk, which guarantees smooth, luscious protein shakes; a percentage of ' +
            'every REEF BlenderBottle® sale goes to the Save Philippine Seas organization.',
      rating: '4.2k Ratings',
      numsold: '5.4k Sold'
    });
});

app.get('/jumprope', function(req, res) {
    res.render('products', {
      title: 'Jump Rope',
      img: 'jumprope.png',
      desc: 'Go back to a healthy lifestyle with this cute and durable jump rope! Say bye to the extra fats, ' +
            'and say hello to sexy, new you!',
      rating: '1.7k Ratings',
      numsold: '2.5k Sold'
    });
});

app.get('/whey', function(req, res) {
    res.render('products', {
      title: 'Just Melon Milk Whey Protein (454g) ',
      img: 'whey.png',
      desc: 'Made with a combination of all-natural sweetener, melon flavor and pure whey protein base; ' +
            'provides the energy; enhances endurance; provides super fresh and delicious nutrition; proudly ' +
            'made in a cGMP, Halal-certified, HACCP-compliant facility located right at the heart of the Philippines',
      rating: '1.1k Ratings',
      numsold: '1.5k Sold'
    });
});

app.get('/sportsbra', function(req, res) {
    res.render('products', {
      title: 'Sports Bra',
      img: 'sportsbra.png',
      desc: ' COMPRESSION & SUPPORT: The Nike sports bra for women utilizes a snug compression fit, providing medium ' +
            'support for a variety of training activities.' +
            'STABILIZED TENSION: Straps create stabilizing tension, helping to minimize bounce during ' +
            'multidirectional movement. The sports bras low racerback straps allow for a full range of motion.' +
            'DRI-FIT TECHNOLOGY: The Nike sports bra has an outer body and inner lining made of Dri-FIT ' +
            'jersey material. The sports bra pulls sweat away from the skin to keep you dry and comfortable.' +
            'COMFORTABLE FIT: The womens sports bra has an elastic encased chest band that feels soft against ' +
            'the skin and provides a secure and comfortable fit. Nylon stabilizing straps enhance support. ',
        rating: '4.3k Ratings',
        numsold: '5.5k Sold'
    });
});
// END OF FITNESS PRODUCTS

// FASHION PRODUCTS
app.get('/dress', function(req, res) {
    res.render('products', {
      title: 'Denim Dress',
      img: 'dress.png',
      desc: 'Beat the heat with this flowy and sleeveless dress this summer. Cute denim dress you can wear ' +
            'in different locations. Slay your travel photos while wearing this dress!',
      rating: '2k Ratings',
      numsold: '1.2k Sold'
    });
});

app.get('/stripes', function(req, res) {
    res.render('products', {
      title: 'Stripes Shirt',
      img: 'stripes.png',
      desc: 'A classic striped crop top with a flirty little heart at the middle. ' +
            'Spice up your ootd by wearing this shirt that is perfect with anything!',
      rating: '2.4k Ratings',
      numsold: '4.3k Sold'
    });
});

app.get('/buckethat', function(req, res) {
    res.render('products', {
      title: 'Bucket Hat',
      img: 'buckethat.png',
      desc: 'A basic black bucket hat to complete your outfit. Perfect for your summer outings.',
      rating: '1.3k Ratings',
      numsold: '3.2k Sold'
    });
});

app.get('/sweater', function(req, res) {
    res.render('products', {
      title: 'Grey Sweater',
      img: 'sweater.png',
      desc: 'A basic gray sweater perfect during the rainy season. It is soft and comfortable to wear.',
      rating: '2.7k Ratings',
      numsold: '3.4k Sold'
    });
});

app.get('/poloshirt', function(req, res) {
    res.render('products', {
      title: 'Beige Polo Shirt',
      img: 'poloshirt.png',
      desc: 'Beige polo shirt that is perfect for any ocassion! Easy and breathable fabric that is perfect ' +
            'for the summer season!',
      rating: '2k Ratings',
      numsold: '1.2k Sold'
    });
});

app.get('/shorts', function(req, res) { // not working idk why
    res.render('products', {
      title: 'Nike Woman Shorts',
      img: 'Fitness2.png',
      desc: 'These Nike shorts are great for guys who enjoy long distance running. '+
              'provide optimal comfort and breathability during your runs and are built to last.' +
              'These lightweight running shorts are flexible, breathable, and have an adjustable waistband.',
      rating: '5.4k Ratings',
      numsold: '7.2k Sold'
    });
});
// END OF FASHION PRODUCTS

// HEALTH PRODUCTS
app.get('/collagen', function(req, res) {
    res.render('products', {
      title: 'Collagen',
      img: 'collagen.png',
      desc: 'Nano-peptide collagen supplement features a potent, high-quality blend of the most bioavailable ' +
            'collagen peptides; provides collagen Types I and III for healthier hair, skin, nails, tendons, ' +
            'ligaments, and bones; tightens, tones, and rejuvenates skin; promotes joint comfort, mobility, and ' +
            'quality of life; pure collagen protein is enzymatically hydrolyzed into low molecular weight peptides ' +
            'for optimal utilization by the body; GMP/NSF-certified, product quality and safety guaranteed; made in ' +
            'USA in an FDA-registered and inspected facility.',
      rating: '1.4k Ratings',
      numsold: '2.5k Sold'
    });
});

app.get('/keto', function(req, res) {
    res.render('products', {
      title: 'Exogenous Ketone Base',
      img: 'keto.png',
      desc: 'Immediately raises ketone levels; improves athletic performance; eliminates keto flu symptoms, ' +
            'which can come up during transition; keeps you energized and alert; has a rich chocolate flavor.',
      rating: '1.4k Ratings',
      numsold: '1.9k Sold'
    });
});

app.get('/tums', function(req, res) {
    res.render('products', {
      title: 'Tums Antacid Chewable Tablets',
      img: 'tums.png',
      desc: 'AmericaÍs #1 antacid; relieves heartburn, sour stomach, acid indigestion, and upset stomach; ' +
            'travels directly to the source of heartburn, neutralizes acid on contract, and provides pain relief ' +
            'in seconds; has a tasty tropical fruit flavor',
      rating: '2.7k Ratings',
      numsold: '3.2k Sold'
    });
});

app.get('/goli', function(req, res) {
    res.render('products', {
      title: 'Apple Cider Vinegar Gummies',
      img: 'goli.png',
      desc: 'Improves digestion and metabolism; boosts energy; reduces water retention; has high levels of amino ' +
            'acids, potassium, and enzymes; clears the complexion and promotes healthy, glowing skin',
      rating: '3.4k Ratings',
      numsold: '4.3k Sold'
    });
});

app.get('/honey', function(req, res) {
    res.render('products', {
      title: 'Honey',
      img: 'honey.png',
      desc: 'Known to be used by ancient Egyptians as an embalming fluid and to dress wounds; has anti-bacterial ' +
            'and anti-inflammatory properties; treats and prevents acne; helps fight free radicals; boosts ' +
            'complexion with soothing and moisturizing properties; unclogs and clears pores',
      rating: '2.3k Ratings',
      numsold: '2.8k Sold'
    });
});
// END OF HEALTH PRODUCTS

// page to tell that the promo is unavailable
app.get('/unavailable', function(req, res) {
    res.render('unavailable');
});

// NEW RELEASE PRODUCTS
app.get('/nike', function(req, res) {
    res.render('products', {
      title: 'Nike Windbreaker',
      img: 'nike.png',
      desc: 'More than a direct descendant, the Nike Windrunner Jacket is made to look and feel just ' +
            'like the original Windrunner from 1978. It has a breathable mesh lining, ribbed cuffs and the ' +
            'iconic chevron at the chest.',
      rating: '1.3k Ratings',
      numsold: '3.2k Sold'
    });
});

app.get('/victoria', function(req, res) {
    res.render('products', {
      title: 'Victorias Secret Perfume',
      img: 'victoria.png',
      desc: 'Our iconic fragrance, in a light-as-air mist. Mysterious & irresistible, your sexy secret weapon. ' +
            'Dont Quit Your Daydream is a sheer veil of florals with skin-like warmth. Pair with your Eau' +
            ' de Parfum for a more lasting fragrance experience.',
      rating: '2.1k Ratings',
      numsold: '4.5k Sold'
    });
});

app.get('/sunglasses', function(req, res) {
    res.render('products', {
      title: 'Sunglasses',
      img: 'sunglasses.png',
      desc: 'Looking for a KILLER frame for that killer outfit ? look no further, ZARA will complete that fierce look. ' +
            'These extremely exaggerated cat eye sunnies are made of high quality plastic materials and include all ' +
            'the sass for your spring look. Hinges are reinforced with metal strength and lenses are coated with 100% ' +
            'UV protected coating.',
      rating: '3.2k Ratings',
      numsold: '5k Sold'
    });
});
// END OF NEW RELEASE PRODUCTS

app.use(express.static('images'));
app.use(express.static('public'));

// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});
