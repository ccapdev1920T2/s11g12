const db = require('./models/db.js');
const Account= require('./models/UserModel.js');
const Product = require('./models/ProductModel.js');
const Log = require('./models/LoggedModel.js');
const Review = require('./models/ReviewModel.js');
const Transaction = require('./models/TransModel.js');
const History = require('./models/HistoryModel.js');
const Category = require('./models/CategoryModel.js');
const Cart = require('./models/CartModel.js');
const Wishlist = require('./models/WishlistModel.js');
db.connect();
const data = {
    addData: function()
    {
        var users = [
            {
            firstname:'Vhino',
            lastname: 'Ramos',
            email: 'wendell@gmail.com',
            state: 'South Luzon',
            address: 'Town and Country Exec',
            hash: 'bb9e53c78cad04db4d3dfc4bc6a266fa',
            salt: 'HUzjmJGpVabh2Z8UrQDtDw==',
            num: '09171907495',
            photo: 'vhino.jpg'
            },
            {
            firstname:'Kristal',
            lastname: 'Ambrosio',
            email: 'kristal@gmail.com',
            state: 'South Luzon',
            address: 'Seaman Village',
            hash: 'bb9e53c78cad04db4d3dfc4bc6a266fa',
            salt: 'HUzjmJGpVabh2Z8UrQDtDw==',
            num: '0917838493',
            photo: 'kristal.jpg'
            },
            {
            firstname:'Justine',
            lastname: 'Fernandez',
            email: 'jus@gmail.com',
            state: 'Metro Manila',
            address: 'Binondo',
            hash: 'bb9e53c78cad04db4d3dfc4bc6a266fa',
            salt: 'HUzjmJGpVabh2Z8UrQDtDw==',
            num: '09996547899',
            photo: 'justine.jpg'
            },
            {
            firstname:'Lucifer',
            lastname: 'Morningstar',
            email: 'juts@gmail.com',
            state: 'Visayas',
            address: 'Greendale',
            hash: 'bb9e53c78cad04db4d3dfc4bc6a266fa',
            salt: 'HUzjmJGpVabh2Z8UrQDtDw==',
            num: '09956666666',
            photo: 'luci.jpg'
            },
            {
            firstname:'RuPaul',
            lastname: 'Drag',
            email: 'daks@gmail.com',
            state: 'Mindanao',
            address: 'Sashay Away',
            hash: 'bb9e53c78cad04db4d3dfc4bc6a266fa',
            salt: 'HUzjmJGpVabh2Z8UrQDtDw==',
            num: '09154876543',
            photo: 'ru.jpg'
            },
            {
            firstname:'Admin',
            lastname: 'admin',
            email: 'admin@gmail.com',
            state: 'North Luzon',
            address: 'Here',
            hash: 'bb9e53c78cad04db4d3dfc4bc6a266fa',
            salt: 'HUzjmJGpVabh2Z8UrQDtDw==',
            num: '09999999999',
            admin: 1,
            photo: 'default.png'
            }
        ];
        db.insertMany(Account, users);

        var products = [
            {
                name:'Marc Jacobs Mascara',
                type:'Beauty',
                photo:'MJMascara.png',
                price: 1500,
                desc: 'Experience ultimate volume and the look of thick, false lashes with Velvet Noir Major Volume Mascara. ' +
            'The lash-maximizing, curvy brush places the most volume at the hard-to-reach center lash line, ' +
            'and the defining tip styles lashes for major drama. The super-concentrated black pigment delivers ' +
            'the greatest visual impact, and the Flash Volume Complex™ creates instant, smudge-proof length and ' +
            'volume in three strokes or less. Velvet Noir gives you the thickest lashes in one sweep.'
            },
            {
                name:'Bretman Rock Shadow Palette',
                type:'Beauty',
                photo:'brpalette.png',
                price: 700,
                desc: 'Experiment and express yourself with the jungle-inspired shadow palette designed by Bretman Rock. ' +
                  'This bold, bigger than life palette consists of 15 wildly savage shades in a mix of bold and neutral ' +
                  'colors with satin, matte, metallic and shimmer finishes. All vibrant mattes are paired with shimmer, ' +
                  'metallic finishes that allow you to create unlimited roaring eye looks. The powerfully pigmented, ' +
                  'buttery-soft shades glide on easily and blend seamlessly, leaving no creases behind. The smooth formula ' +
                  'provides optimum texture and comfortable all-day wear. Each shade can be used either wet or dry, to deliver ' +
                  'a bold, yet dangerously captivating look.'
            },
            {
                name:'Bucket Hat',
                type:'Fashion',
                photo:'buckethat.png',
                price: 100,
                desc: 'A basic black bucket hat to complete your outfit. Perfect for your summer outings.'
            },
            {
                name:'Vitamin C Serum',
                type:'Beauty',
                photo:'serum.png',
                price: 250,
                desc: 'Enriched with vitamin C and niacinamide; lightens skin to minimize the look of spots and blemishes; ' +
                  'highly concentrated antioxidant formula fights free radicals and prevents oxidation; protects as it ' +
                  'helps repair skin damaged by acne and sun exposure; soothes, hydrates, and nourishes with vitamin E ' +
                  'and aloe vera'
            },
            {
                name:'Mac Lipstick',
                type:'Beauty',
                photo:'lipstick.png',
                price: 800,
                sold: 3,
                reviews: 3,
                desc: 'Feel powerful and fresh with the new MAC Lipstick in the shade Ruby Woo.',
                rating: 4
            },
            {
                name:'Carmex Lip Balm',
                type:'Beauty',
                photo:'carmex.png',
                price: 250,
                desc: 'A convenient squeezable medicated lip balm to soothe and protect dry, chapped lips.' +
            'Provides long-lasting protective barrier to help promote healing.' +
            'Glides on smoothly to help soften and hydrate lips with moisturizing cocoa butter.' +
            'Cools and soothes lips with camphor and menthol.'
            },
            {
                name:'Yoga Pants',
                type:'Fitness',
                photo:'yogapants.png',
                price: 1200,
                desc: 'Get all the support you need with a fit that slims, conforms, and contours with each pose and movement.' +
                  ' It features an ankle-length style that elongates legs, high-waist active elastic waistband that stays in place ' +
                  'and looks flattering on any figure, while stretch fabric offers enough thickness and breathability.'
            },
            {
                name:'BlenderBottle Shaker',
                type:'Fitness',
                photo:'tumbler.png',
                price: 400,
                desc: 'A state-of-the-art shaker. Leak-proof and highly secure; built with a masterful mixing system, ' +
                  'namely the the BlenderBall® wire whisk, which guarantees smooth, luscious protein shakes; a percentage of ' +
                  'every REEF BlenderBottle® sale goes to the Save Philippine Seas organization.',
            },
            {
                name:'Jump Rope',
                type:'Fitness',
                photo:'jumprope.png',
                price: 150,
                desc: 'Go back to a healthy lifestyle with this cute and durable jump rope! Say bye to the extra fats, ' +
                  'and say hello to sexy, new you!'
            },
            {
                name:'Just Melon Milk Whey Protein (454g)',
                type:'Fitness',
                photo:'whey.png',
                price: 900,
                desc: 'Made with a combination of all-natural sweetener, melon flavor and pure whey protein base; ' +
                  'provides the energy; enhances endurance; provides super fresh and delicious nutrition; proudly ' +
                  'made in a cGMP, Halal-certified, HACCP-compliant facility located right at the heart of the Philippines',
            },
            {
                name:'Sports Bra',
                type:'Fitness',
                photo:'sportsbra.png',
                price: 1200,
                desc: ' COMPRESSION & SUPPORT: The Nike sports bra for women utilizes a snug compression fit, providing medium ' +
                  'support for a variety of training activities.' +
                  'STABILIZED TENSION: Straps create stabilizing tension, helping to minimize bounce during ' +
                  'multidirectional movement. The sports bras low racerback straps allow for a full range of motion.' +
                  'DRI-FIT TECHNOLOGY: The Nike sports bra has an outer body and inner lining made of Dri-FIT ' +
                  'jersey material. The sports bra pulls sweat away from the skin to keep you dry and comfortable.' +
                  'COMFORTABLE FIT: The womens sports bra has an elastic encased chest band that feels soft against ' +
                  'the skin and provides a secure and comfortable fit. Nylon stabilizing straps enhance support. '
            },
            {
                name:'Denim Dress',
                type:'Fashion',
                photo:'dress.png',
                price: 250,
                desc: 'Beat the heat with this flowy and sleeveless dress this summer. Cute denim dress you can wear ' +
                  'in different locations. Slay your travel photos while wearing this dress!'
            },
            {
                name:'Stripes Shirt',
                type:'Fashion',
                photo:'stripes.png',
                price: 250,
                desc: 'A classic striped crop top with a flirty little heart at the middle. ' +
                  'Spice up your ootd by wearing this shirt that is perfect with anything!'
            },
            {
                name:'Grey Sweater',
                type:'Fashion',
                photo:'sweater.png',
                price: 450,
                desc: 'A basic gray sweater perfect during the rainy season. It is soft and comfortable to wear.'
            },
            {
                name:'Beige Polo Shirt',
                type:'Fashion',
                photo:'poloshirt.png',
                price: 350,
                desc: 'Beige polo shirt that is perfect for any ocassion! Easy and breathable fabric that is perfect ' +
                  'for the summer season!'
            },
            {
                name:'Nike Woman Shorts',
                type:'Fitness',
                photo:'Fitness2.png',
                price: 250,
                desc: 'These Nike shorts are great for guys who enjoy long distance running. '+
					'provide optimal comfort and breathability during your runs and are built to last.' +
					'These lightweight running shorts are flexible, breathable, and have an adjustable waistband.'
            },
            {
                name:'Collagen',
                type:'Health',
                photo:'collagen.png',
                price: 950,
                desc: 'Nano-peptide collagen supplement features a potent, high-quality blend of the most bioavailable ' +
                  'collagen peptides; provides collagen Types I and III for healthier hair, skin, nails, tendons, ' +
                  'ligaments, and bones; tightens, tones, and rejuvenates skin; promotes joint comfort, mobility, and ' +
                  'quality of life; pure collagen protein is enzymatically hydrolyzed into low molecular weight peptides ' +
                  'for optimal utilization by the body; GMP/NSF-certified, product quality and safety guaranteed; made in ' +
                  'USA in an FDA-registered and inspected facility.'
            },
            {
                name:'Exogenous Ketone Base',
                type:'Health',
                photo:'keto.png',
                price: 850,
                desc: 'Immediately raises ketone levels; improves athletic performance; eliminates keto flu symptoms, ' +
                  'which can come up during transition; keeps you energized and alert; has a rich chocolate flavor.'
            },
            {
                name:'Tums Antacid Chewable Tablets',
                type:'Health',
                photo:'tums.png',
                price: 900,
                desc: 'AmericaÍs #1 antacid; relieves heartburn, sour stomach, acid indigestion, and upset stomach; ' +
                  'travels directly to the source of heartburn, neutralizes acid on contract, and provides pain relief ' +
                  'in seconds; has a tasty tropical fruit flavor'
            },
            {
                name:'Apple Cider Vinegar Gummies',
                type:'Health',
                photo:'goli.png',
                price: 600,
                desc: 'Improves digestion and metabolism; boosts energy; reduces water retention; has high levels of amino ' +
                  'acids, potassium, and enzymes; clears the complexion and promotes healthy, glowing skin'
            },
            {
                name:'Honey',
                type:'Health',
                photo:'honey.png',
                price: 250,
                desc: 'Known to be used by ancient Egyptians as an embalming fluid and to dress wounds; has anti-bacterial ' +
                  'and anti-inflammatory properties; treats and prevents acne; helps fight free radicals; boosts ' +
                  'complexion with soothing and moisturizing properties; unclogs and clears pores'
            },
            {
                name:'Nike Windbreaker',
                type:'Fashion',
                photo:'nike.png',
                price: 850,
                desc: 'More than a direct descendant, the Nike Windrunner Jacket is made to look and feel just ' +
                  'like the original Windrunner from 1978. It has a breathable mesh lining, ribbed cuffs and the ' +
                  'iconic chevron at the chest.'
            },
            {
                name:'Victorias Secret Perfume',
                type:'Beauty',
                photo:'victoria.png',
                price: 950,
                desc: 'Our iconic fragrance, in a light-as-air mist. Mysterious & irresistible, your sexy secret weapon. ' +
                  'Dont Quit Your Daydream is a sheer veil of florals with skin-like warmth. Pair with your Eau' +
                  ' de Parfum for a more lasting fragrance experience.'
            },
            {
                name:'Sunglasses',
                type:'Fashion',
                photo:'sunglasses.png',
                price: 750,
                desc: 'Looking for a KILLER frame for that killer outfit ? look no further, ZARA will complete that fierce look. ' +
                  'These extremely exaggerated cat eye sunnies are made of high quality plastic materials and include all ' +
                  'the sass for your spring look. Hinges are reinforced with metal strength and lenses are coated with 100% ' +
                  'UV protected coating.'
            },
            {
                name:'Modess Long Napkin',
                type:'Health',
                photo:'modess.png',
                price: 50,
                sold: 2,
                desc: 'MODESS Cottony Soft Regular provides superior protection that stays in place as you move. ' +
					'With its CLOSE FIT CENTER, it stays close to the body and quickly absorb the flow straight towards the pad. ' +
					'Its Absorbent Micro-protect Crystals inside the pad lock the fluid beneath and help you feel dry. ' +
					'It has STAY FRESH™ designed to control menstrual odor. Moreover, it has deepened 120 Anti-Leak Funnels all around the pad to prevent leaks from escaping.'
            },
            {
                name:'Efficascent Oil',
                type:'Health',
                photo:'oil.png',
                price: 35,
                sold: 3,
                desc: 'Efficascent Oil (Extra Strength) is a liniment especially formulated for fast and effective relief of rheumatism back pains, ' +
					'muscular pains, joint pains, lumbago, stiff neck, headache, flatulence, insect bites, minor sprains and strains, cramps, itchiness, ' +
					'and other skin irritations. This is the same trusted brand, but with a stronger formulation and deeper penetrating heat for faster relief ' +
					'of tedious muscles or body joints. Ideal for expectant mothers and little children for the relief of gas pains, headaches, itchiness, and minor burns.'
            },
            {
                name:'Lipstick',
                type:'Beauty',
                photo:'lipstick.png',
                price: 499,
                sold: 1,
                desc: 'Formulated to shade, define and showcase the lips, M·A·C Lipstick is available in every nuance of your favorite color and high-fashion texture. ' +
					'It\'s the iconic product that made M·A·C famous.AMPLIFIED CREME (A): Ultra-creamy. Quietly shiny. Color-packed! Hi-res: hi-impact. CREMESHEEN (C): ' +
					'Creme-based lipstick that imparts bright full color, with a soft and supple shine. FROST (F): Excellent color payoff with medium to high ' +
					'frosted shimmer-and-shine finish. LUSTRE (L): Demi-sheer with wet-look lustre finish. Very slick. Makes lips look soft, smooth, ultra-moist. ' +
					'MATTE (M): Pigment rich with intense color pay-off. No-shine, all matte finish. SATIN (S): Color-rich. Soft satin, semi-matte finish. ' +
					'Conditions while adding intense color.'
            },
            {
                name:'Red Sexy Swimsuit',
                type:'Fitness',
                photo:'swim.png',
                price: 399,
                desc: 'A swimsuit is an item of clothing designed to be worn by people engaging in a water-based activity or water sports, ' +
					'such as swimming, diving and surfing, or sun-orientated activities, such as sun bathing. ' +
					'Different types may be worn by men, women, and children.'
            },
            {
                name:'Head and Shoulders Shampoo',
                type:'Health',
                photo:'shampoo.png',
                price: 100,
                desc: 'Your hair is unique and that means that you need unique solutions for keeping your hair strong, and your scalp healthy and dandruff-free. ' +
                        'Our products are specially formulated to fight the symptoms and cause of dandruff, for all hair types. ' +
                        'Head & Shoulders dandruff-fighting solutions include shampoos and conditioners as well as co-washes and hair treatments ' +
                        'which give your hair an extra boost.'
            },
            {
                name:'Channel No. 5 Perfume',
                type:'Beauty',
                photo:'channel.png',
                price: 3999,
                desc: 'Chanel No. 5 was the first perfume launched by French couturier Gabrielle "Coco" Chanel. ' +
					'The scent formula for the fragrance was compounded by French-Russian chemist and perfumer Ernest Beaux. ' +
					'The design of its bottle has been an important part of the product\'s allure.'
            },
            {
                name:'Love, Beauty and Planet Body Lotion',
                type:'Beauty',
                photo:'lotion.png',
                price: 59,
                sold: 2,
                desc: 'Our nourishing, refreshing body lotions are superbly crafted with signature ingredients like murumuru butter and coconut water. ' +
					'They make your skin soft, smooth and most of all gorgeously moisturized for 24 hours.'
            },
            {
                name: 'Dove Soap',
                type: 'Beauty',
                photo: 'soap.png',
                price: 59,
                desc: 'Dove started its life in 1957 in the US, with the revolutionary new beauty cleansing Bar. ' +
					'With its patented blend of mild cleansers and ¼ moisturising cream, Dove\'s iconic Beauty Bar ' +
					'rinses cleaner than soap, leaving skin clean, soft and smooth.'
            }
        ]
        db.insertMany(Product, products);

        var trans = [
            {
                email: 'wendell@gmail.com',
                id: '00000001',
                amount: 584,
                items:  ['Modess Long Napkin', 'Mac Lipstick', 'Efficascent Oil'],
                photos: ['modess.png', 'lipstick.png', 'oil.png'],
                prices: [50, 499, 35],
                dateOrd: '09/10/2019',
                dateRec: '09/14/2019',
                dateToday: '06/01/2020',
                delivered: 1
            },
            {
                email: 'wendell@gmail.com',
                id: '00000002',
                amount: 118,
                items:  ['Dove Soap', 'Love, Beauty and Planet Body Lotion'],
                photos: ['soap.png', 'lotion.png'],
                prices: [59, 59],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/05/2020'
            },
            {
                email: 'wendell@gmail.com',
                id: '00000003',
                amount: 3999,
                items:  ['Channel No. 5 Perfume'],
                photos: ['channel.png'],
                prices: [3999],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020',
                cancelled: 1
            },
            {
                email: 'wendell@gmail.com',
                id: '00000004',
                amount: 250,
                items:  ['Nike Woman Shorts'],
                photos: ['Fitness2.png'],
                prices: [250],
                dateOrd: '05/20/2020',
                dateRec: '05/24/2020',
                dateToday: '06/01/2020',
                returned: 1
            },
            {
                email: 'kristal@gmail.com',
                id: '00000005',
                amount: 59,
                items:  ['Dove Soap'],
                photos: ['soap.png'],
                prices: [59],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020'
            },
            {
                email: 'kristal@gmail.com',
                id: '00000006',
                amount: 59,
                items:  ['Love, Beauty and Planet Body Lotion'],
                photos: ['lotion.png'],
                prices: [59],
                dateOrd: '05/01/2020',
                dateRec: '05/20/2020',
                dateToday: '06/01/2020',
                delivered: 1
            },
            {
                email: 'kristal@gmail.com',
                id: '00000007',
                amount: 3999,
                items:  ['Channel No. 5 Perfume'],
                photos: ['channel.png'],
                prices: [3999],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020',
                cancelled: 1
            },
            {
                email: 'kristal@gmail.com',
                id: '00000008',
                amount: 250,
                items:  ['Nike Woman Shorts'],
                photos: ['Fitness2.png'],
                prices: [250],
                dateOrd: '05/01/2020',
                dateRec: '05/20/2020',
                dateToday: '06/01/2020',
                returned: 1
            },
            {
                email: 'jus@gmail.com',
                id: '00000009',
                amount: 59,
                items:  ['Love, Beauty and Planet Body Lotion'],
                photos: ['lotion.png'],
                prices: [59],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020'
            },
            {
                email: 'jus@gmail.com',
                id: '00000010',
                amount: 85,
                items:  ['Modess Long Napkin', 'Efficascent Oil'],
                photos: ['modess.png','oil.png'],
                prices: [85],
                dateOrd: '05/01/2020',
                dateRec: '05/20/2020',
                dateToday: '06/01/2020',
                delivered: 1
            },
            {
                email: 'jus@gmail.com',
                id: '00000011',
                amount: 30,
                items:  ['Channel No. 5 Perfume'],
                photos: ['channel.png'],
                prices: [30],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020',
                cancelled: 1
            },
            {
                email: 'jus@gmail.com',
                id: '00000012',
                amount: 250,
                items:  ['Nike Woman Shorts'],
                photos: ['Fitness2.png'],
                prices: [250],
                dateOrd: '05/01/2020',
                dateRec: '05/20/2020',
                dateToday: '06/01/2020',
                returned: 1
            },
            {
                email: 'juts@gmail.com',
                id: '00000013',
                amount: 3999,
                items:  ['Channel No. 5 Perfume'],
                photos: ['channel.png'],
                prices: [3999],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020'
            },
            {
                email: 'juts@gmail.com',
                id: '00000014',
                amount: 35,
                items:  ['Efficascent Oil'],
                photos: ['oil.png'],
                prices: [35],
                dateOrd: '05/01/2020',
                dateRec: '05/20/2020',
                dateToday: '06/01/2020',
                delivered: 1
            },
            {
                email: 'juts@gmail.com',
                id: '00000015',
                amount: 50,
                items:  ['Modess Long Napkin'],
                photos: ['modess.png'],
                prices: [50],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020',
                cancelled: 1
            },
            {
                email: 'juts@gmail.com',
                id: '00000016',
                amount: 250,
                items:  ['Nike Woman Shorts'],
                photos: ['Fitness2.png'],
                prices: [250],
                dateOrd: '05/01/2020',
                dateRec: '05/20/2020',
                dateToday: '06/01/2020',
                returned: 1
            },
            {
                email: 'daks@gmail.com',
                id: '00000017',
                amount: 118,
                items:  ['Dove Soap', 'Love, Beauty and Planet Body Lotion'],
                photos: ['soap.png', 'lotion.png'],
                prices: [118],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020'
            },
            {
                email: 'daks@gmail.com',
                id: '00000018',
                amount: 584,
                items:  ['Modess Long Napkin', 'Mac Lipstick', 'Efficascent Oil'],
                photos: ['modess.png', 'lipstick.png', 'oil.png'],
                prices: [584],
                dateOrd: '05/01/2020',
                dateRec: '05/20/2020',
                dateToday: '06/01/2020'
            },
            {
                email: 'daks@gmail.com',
                id: '00000019',
                amount: 250,
                items:  ['Nike Woman Shorts'],
                photos: ['Fitness2.png'],
                prices: [250],
                dateOrd: '06/01/2020',
                dateRec: '06/20/2020',
                dateToday: '06/01/2020',
                cancelled: 1
            },
            {
                email: 'daks@gmail.com',
                id: '00000020',
                amount: 250,
                items:  ['Nike Woman Shorts'],
                photos: ['Fitness2.png'],
                prices: [250],
                dateOrd: '05/01/2020',
                dateRec: '05/20/2020',
                dateToday: '06/01/2020',
                returned: 1
            }
        ]
        db.insertMany(Transaction, trans);

        var hist = [
            {
                email: 'wendell@gmail.com',
                name: 'Dove Soap',
                photo: 'soap.png',
                quantity: 1,
                price: 59,
                dateOrd: '09/10/2019',
                status: 'Delivered'
            },
            {
                email: 'wendell@gmail.com',
                name: 'Mac Lipstick',
                photo: 'lipstick.png',
                quantity: 1,
                price: 800,
                dateOrd: '02/14/2020',
                status: 'Delivered'
            },
            {
                email: 'wendell@gmail.com',
                name: 'Love, Beauty and Planet Body Lotion',
                photo: 'lotion.png',
                quantity: 1,
                price: 59,
                dateOrd: '06/01/2020',
                status: 'Delivered'
            },
            {
                email: 'wendell@gmail.com',
                name: 'Channel No. 5 Perfume',
                photo: 'channel.png',
                quantity: 1,
                price: 3999,
                dateOrd: '06/01/2020',
                status: 'Cancelled'
            },
            {
                email: 'wendell@gmail.com',
                name: 'Nike Woman Shorts',
                photo: 'Fitness2.png',
                quantity: 1,
                price: 250,
                dateOrd: '05/20/2020',
                status: 'Returned'
            },
            {
                email: 'kristal@gmail.com',
                name: 'Nike Woman Shorts',
                photo: 'Fitness2.png',
                quantity: 1,
                price: 250,
                dateOrd: '05/01/2020',
                status: 'Returned'
            },
            {
                email: 'kristal@gmail.com',
                name: 'Love, Beauty and Planet Body Lotion',
                photo: 'lotion.png',
                quantity: 1,
                price: 59,
                dateOrd: '05/01/2020',
                status: 'Delivered'
            },
            {
                email: 'kristal@gmail.com',
                name: 'Channel No. 5 Perfume',
                photo: 'channel.png',
                quantity: 1,
                price: 3999,
                dateOrd: '06/01/2020',
                status: 'Cancelled'
            },
            {
                email: 'jus@gmail.com',
                name: 'Modess Long Napkin',
                photo: 'modess.png',
                quantity: 1,
                price: 50,
                dateOrd: '05/01/2020',
                status: 'Delivered'
            },
            {
                email: 'jus@gmail.com',
                name: 'Efficascent Oil',
                photo: 'oil.png',
                quantity: 1,
                price: 35,
                dateOrd: '05/01/2020',
                status: 'Delivered'
            },
            {
                email: 'jus@gmail.com',
                name: 'Mac Lipstick',
                photo: 'lipstick.png',
                quantity: 1,
                price: 800,
                dateOrd: '01/03/2020',
                status: 'Delivered'
            },
            {
                email: 'jus@gmail.com',
                name: 'Channel No. 5 Perfume',
                photo: 'channel.png',
                quantity: 1,
                price: 3999,
                dateOrd: '06/01/2020',
                status: 'Cancelled'
            },
            {
                email: 'jus@gmail.com',
                name: 'Nike Woman Shorts',
                photo: 'Fitness2.png',
                quantity: 1,
                price: 250,
                dateOrd: '05/01/2020',
                status: 'Returned'
            },
            {
                email: 'juts@gmail.com',
                name: 'Efficascent Oil',
                photo: 'oil.png',
                quantity: 1,
                price: 35,
                dateOrd: '05/01/2020',
                status: 'Delivered'
            },
            {
                email: 'juts@gmail.com',
                name: 'Modess Long Napkin',
                photo: 'modess.png',
                quantity: 1,
                price: 50,
                dateOrd: '06/01/2020',
                status: 'Cancelled'
            },
            {
                email: 'juts@gmail.com',
                name: 'Nike Woman Shorts',
                photo: 'Fitness2.png',
                quantity: 1,
                price: 250,
                dateOrd: '05/01/2020',
                status: 'Returned'
            },
            {
                email: 'daks@gmail.com',
                name: 'Modess Long Napkin',
                photo: 'modess.png',
                quantity: 1,
                price: 59,
                dateOrd: '05/01/2020',
                status: 'Delivered'
            },
            {
                email: 'daks@gmail.com',
                name: 'Mac Lipstick',
                photo: 'lipstick.png',
                quantity: 1,
                price: 800,
                dateOrd: '05/01/2020',
                status: 'Delivered'
            },
            {
                email: 'daks@gmail.com',
                name: 'Efficascent Oil',
                photo: 'oil.png',
                quantity: 1,
                price: 35,
                dateOrd: '05/01/2020',
                status: 'Delivered'
            },
            {
                email: 'daks@gmail.com',
                name: 'Nike Woman Shorts',
                photo: 'Fitness2.png',
                quantity: 1,
                price: 250,
                dateOrd: '06/01/2020',
                status: 'Cancelled'
            },
            {
                email: 'daks@gmail.com',
                name: 'Nike Woman Shorts',
                photo: 'Fitness2.png',
                quantity: 1,
                price: 250,
                dateOrd: '05/01/2020',
                status: 'Returned'
            }
            
        ]
        db.insertMany(History, hist);

        var log = {
            logged: 0
        }
        db.insertOne(Log, log);

        var rev = [
            {
                user: 'wendell@gmail.com',
                name: 'Vhino Ramos',
                item: 'Mac Lipstick',
                date: 'February 14, 2020',
                rating: 5,
                message: 'this was nice in buy. I really like the Lipstick',
                title: 'this was a nice buy',
                photo: 'vhino.jpg'
            },
            {
                user: 'jus@gmail.com',
                name: 'Justine Fernandez',
                item: 'Mac Lipstick',
                date: 'January 03, 2020',
                rating: 4,
                message: 'I wore this lipstick during my drag night and I won!',
                title: 'FAB!',
                photo: 'justine.jpg'
            },
            {
                user: 'daks@gmail.com',
                name: 'RuPaul Drag',
                item: 'Mac Lipstick',
                date: 'January 29, 2019',
                rating: 3,
                message: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
                title: 'We Love it so much!',
                photo: 'ru.jpg'
            },
        ]
        db.insertMany(Review, rev);
        const cat = [
            {
                type: 'beauty',
                title: 'Ganda ka Teh? ♡ Beauty',
                activebanner: 'beautybanner1.png',
                banners: ['beautybanner2.png', 'beautybanner3.png'],
                gif:'flower.gif',
                gifclass: 'flower',
                quote:'"Beauty, to me, is about being comfortable in your own skin. That or a kick-ass red lipstick." - Gwyneth Paltrow',
                activeimg:'carmex.png',
                count: [1, 2],
                actname: 'Carmex Lip Balm'
            },
            {
                type: 'fitness',
                title: 'Ganda ka Teh? ♡ Fitness',
                activebanner: 'fitnessbanner1.png',
                banners: ['beautybanner3.png'],
                gif:'barbell.gif',
                gifclass: 'barbell',
                quote:'"If you still look cute after you work out, you didn\'t train hard enough." - Google Quotes',
                activeimg:'whey.png',
                count: [1],
                actname: 'Just Melon Milk Whey Protein (454g)'
            },
            {
                type: 'fashion',
                title: 'Ganda ka Teh? ♡ Fashion',
                activebanner: 'fashionbanner1.png',
                banners: ['fashionbanner2.png', 'beautybanner3.png'],
                gif:'hearts.gif',
                gifclass: 'hearts',
                quote:'"Everyday is a fashion show and the world is your runway." - Coco Chanel',
                activeimg:'dress.png',
                count: [1, 2],
                actname: 'Denim Dress'
            },
            {
                type: 'health',
                title: 'Ganda ka Teh? ♡ Health',
                activebanner: 'healthbanner1.png',
                banners: ['beautybanner3.png'],
                gif:'leaves.gif',
                gifclass: 'leaves',
                quote:'"It is health that is real wealth and not pieces of gold and silver." - Mahatma Gandhi',
                activeimg:'goli.png',
                count: [1],
                actname: 'Apple Cider Vinegar Gummies'
            },

        ]     
        db.insertMany(Category, cat);

        var cart = [{
            user: 'wendell@gmail.com'
        },
        {
            user: 'kristal@gmail.com'
        },
        {
            user: 'jus@gmail.com'
        },
        {
            user: 'juts@gmail.com'
        },
        {
            user: 'daks@gmail.com'
        },
        {
            user: 'admin@gmail.com'
        },
    ]
    db.insertMany(Cart, cart);
    db.insertMany(Wishlist, cart)
    }
}
module.exports = data;