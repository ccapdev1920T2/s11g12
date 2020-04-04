

const productController = {

	// HOMEPAGE PRODUCTS
	getShorts: function (req, res) {
		res.render('products', {
			title: 'Nike Woman Shorts',
			img: 'Fitness2.png',
			desc: 'These Nike shorts are great for guys who enjoy long distance running. '+
					'provide optimal comfort and breathability during your runs and are built to last.' +
					'These lightweight running shorts are flexible, breathable, and have an adjustable waistband.',
			rating: '5.4k Ratings',
			numsold: '7.2k Sold',
			price: 'PHP 250 ONLY!',
			reviews: [
			{
				icon: 'user1.jpg',
				name: 'Joji Sta Maria',
				date: 'February 14, 2020',
				time: 'Last Week',
				title: 'this was nice in buy',
				desc: 'this was nice in buy. I really like the shorts its so short',
			},
			{
				icon: 'user2.jpg',
				name: 'Mamamoo_123',
				date: 'January 03, 2020',
				time: 'Last Month',
				title: 'FAB!',
				desc: 'I wore this shorts during my drag night and I won!',
			},
			{
				icon: 'user3.png',
				name: 'SailorMoon_XDXDXD',
				date: 'January 29, 2019',
				time: 'Last Year',
				title: 'We Love it so much!',
				desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
			},
			]
	  });
	},

	getModess: function(req, res) {
		res.render('products', {
			title: 'Modess Long Napkin',
			img: 'modess.png',
			desc: 'MODESS Cottony Soft Regular provides superior protection that stays in place as you move. ' +
					'With its CLOSE FIT CENTER, it stays close to the body and quickly absorb the flow straight towards the pad. ' +
					'Its Absorbent Micro-protect Crystals inside the pad lock the fluid beneath and help you feel dry. ' +
					'It has STAY FRESH™ designed to control menstrual odor. Moreover, it has deepened 120 Anti-Leak Funnels all around the pad to prevent leaks from escaping.',
			rating: '2k Ratings',
			numsold: '2.4k Sold',
			price: 'PHP 50 ONLY!',
		});
	},

	getOil: function(req, res) {
		res.render('products', {
			title: 'Efficascent Oil',
			img: 'oil.png',
			desc: 'Efficascent Oil (Extra Strength) is a liniment especially formulated for fast and effective relief of rheumatism back pains, ' +
					'muscular pains, joint pains, lumbago, stiff neck, headache, flatulence, insect bites, minor sprains and strains, cramps, itchiness, ' +
					'and other skin irritations. This is the same trusted brand, but with a stronger formulation and deeper penetrating heat for faster relief ' +
					'of tedious muscles or body joints. Ideal for expectant mothers and little children for the relief of gas pains, headaches, itchiness, and minor burns.',
			rating: '10k Ratings',
			numsold: '10.8k Sold',
			price: 'PHP 35 ONLY!'
		});
	},

	getLipstick: function(req, res) {
		res.render('products', {
			title: 'Mac Lipstick',
			img: 'lipstick.png',
			desc: 'Formulated to shade, define and showcase the lips, M·A·C Lipstick is available in every nuance of your favorite color and high-fashion texture. ' +
					'It\'s the iconic product that made M·A·C famous.AMPLIFIED CREME (A): Ultra-creamy. Quietly shiny. Color-packed! Hi-res: hi-impact. CREMESHEEN (C): ' +
					'Creme-based lipstick that imparts bright full color, with a soft and supple shine. FROST (F): Excellent color payoff with medium to high ' +
					'frosted shimmer-and-shine finish. LUSTRE (L): Demi-sheer with wet-look lustre finish. Very slick. Makes lips look soft, smooth, ultra-moist. ' +
					'MATTE (M): Pigment rich with intense color pay-off. No-shine, all matte finish. SATIN (S): Color-rich. Soft satin, semi-matte finish. ' +
					'Conditions while adding intense color.',
			rating: '11k Ratings',
			numsold: '12k Sold',
			price: 'PHP 499 ONLY!'
		});
	},

	getSwim: function(req, res) {
		res.render('products', {
			title: 'Red Sexy Swimsuit',
			img: 'swim.png',
			desc: 'A swimsuit is an item of clothing designed to be worn by people engaging in a water-based activity or water sports, ' +
					'such as swimming, diving and surfing, or sun-orientated activities, such as sun bathing. ' +
					'Different types may be worn by men, women, and children.',
			rating: '3k Ratings',
			numsold: '3.6k Sold',
			price: 'PHP 399 ONLY!',
			reviews: [
				{
					icon: 'user1.jpg',
					name: 'Joji Sta Maria',
					date: 'February 14, 2020',
					time: 'Last Week',
					title: 'this was nice in buy',
					desc: 'this was nice in buy. I really like the shorts its so short',
				},
				{
					icon: 'user2.jpg',
					name: 'Mamamoo_123',
					date: 'January 03, 2020',
					time: 'Last Month',
					title: 'FAB!',
					desc: 'I wore this shorts during my drag night and I won!',
				},
				{
					icon: 'user3.png',
					name: 'SailorMoon_XDXDXD',
					date: 'January 29, 2019',
					time: 'Last Year',
					title: 'We Love it so much!',
					desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
				},
			]
		});
	},

	getShampoo: function(req, res) {
		res.render('products', {
			title: 'Head and Shoulders Shampoo',
			img: 'shampoo.png',
			desc: 'Your hair is unique and that means that you need unique solutions for keeping your hair strong, and your scalp healthy and dandruff-free. ' +
					'Our products are specially formulated to fight the symptoms and cause of dandruff, for all hair types. ' +
					'Head & Shoulders dandruff-fighting solutions include shampoos and conditioners as well as co-washes and hair treatments ' +
					'which give your hair an extra boost.',
			rating: '2.2k Ratings',
			numsold: '3.8k Sold',
			price: 'PHP 100 ONLY!'
		});
	},

	getPerfume: function(req, res) {
		res.render('products', {
			title: 'Channel No. 5 Perfume',
			img: 'channel.png',
			desc: 'Chanel No. 5 was the first perfume launched by French couturier Gabrielle "Coco" Chanel. ' +
					'The scent formula for the fragrance was compounded by French-Russian chemist and perfumer Ernest Beaux. ' +
					'The design of its bottle has been an important part of the product\'s allure.',
			rating: '5.6k Ratings',
			numsold: '7.2k Sold',
			price: 'PHP 3999 ONLY!',
		});
	},

	getDove: function(req, res) {
		res.render('products', {
			title: 'Dove Soap',
			img: 'soap.png',
			desc: 'Dove started its life in 1957 in the US, with the revolutionary new beauty cleansing Bar. ' +
					'With its patented blend of mild cleansers and ¼ moisturising cream, Dove\'s iconic Beauty Bar ' +
					'rinses cleaner than soap, leaving skin clean, soft and smooth.',
			rating: '1.3k Ratings',
			numsold: '2k Sold',
			price: 'PHP 59 ONLY!'
		});
	},

	getLotion: function(req, res) {
		res.render('products', {
			title: 'Love, Beauty and Planet Body Lotion',
			img: 'lotion.png',
			desc: 'Our nourishing, refreshing body lotions are superbly crafted with signature ingredients like murumuru butter and coconut water. ' +
					'They make your skin soft, smooth and most of all gorgeously moisturized for 24 hours.',
			rating: '1.3k Ratings',
			numsold: '2k Sold',
			price: 'PHP 59 ONLY!',
		});
	},

	// END HOMEPAGE PRODUCTS	  

	// BEAUTY PRODUCTS
    getCarmex: function (req, res) {
		res.render('products', {
      	title: 'Carmex Lip Balm',
      	img: 'carmex.png',
      	desc: 'A convenient squeezable medicated lip balm to soothe and protect dry, chapped lips.' +
            'Provides long-lasting protective barrier to help promote healing.' +
            'Glides on smoothly to help soften and hydrate lips with moisturizing cocoa butter.' +
            'Cools and soothes lips with camphor and menthol.',
      	rating: '2k Ratings',
      	numsold: '1.2k Sold',
      	price: 'PHP 250 ONLY!'
    	});
    },

     getMarcJacobs: function (req, res) {
		res.render('products', {
      	title: 'Marc Jacobs Mascara',
      	img: 'MJMascara.png',
      	desc: 'Experience ultimate volume and the look of thick, false lashes with Velvet Noir Major Volume Mascara. ' +
            'The lash-maximizing, curvy brush places the most volume at the hard-to-reach center lash line, ' +
            'and the defining tip styles lashes for major drama. The super-concentrated black pigment delivers ' +
            'the greatest visual impact, and the Flash Volume Complex™ creates instant, smudge-proof length and ' +
            'volume in three strokes or less. Velvet Noir gives you the thickest lashes in one sweep.',
      	rating: '2.1k Ratings',
      	numsold: '3k Sold',
      	price: 'PHP 1,500 ONLY!'
    	});
    },

    getMacLipstick: function (req, res) {
		res.render('products', {
      	title: 'Mac Lipstick',
      	img: 'maclipstick.png',
      	desc: 'Feel powerful and fresh with the new MAC Lipstick in the shade Ruby Woo.',
      	rating: '1.3k Ratings',
      	numsold: '1k Sold',
      	price: 'PHP 800 ONLY!'
    	});
    },

    getBRPalette: function (req, res) {
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
      	numsold: '6k Sold',
      	price: 'PHP 700 ONLY!'
    	});
    },

    getSerum: function (req, res) {
		res.render('products', {
      	title: 'Vitamin C Serum',
      	img: 'serum.png',
      	desc: 'Enriched with vitamin C and niacinamide; lightens skin to minimize the look of spots and blemishes; ' +
            'highly concentrated antioxidant formula fights free radicals and prevents oxidation; protects as it ' +
            'helps repair skin damaged by acne and sun exposure; soothes, hydrates, and nourishes with vitamin E ' +
            'and aloe vera',
      	rating: '2.7k Ratings',
      	numsold: '3.1k Sold',
      	price: 'PHP 250 ONLY!'
    	});
    },

    // END OF BEAUTY PRODUCTS

    // FITNESS PRODUCTS

    getYogaPants: function (req, res) {
		res.render('products', {
      	title: 'Yoga Pants',
      	img: 'yogapants.png',
      	desc: 'Get all the support you need with a fit that slims, conforms, and contours with each pose and movement.' +
            ' It features an ankle-length style that elongates legs, high-waist active elastic waistband that stays in place ' +
            'and looks flattering on any figure, while stretch fabric offers enough thickness and breathability.',
      	rating: '1.5k Ratings',
      	numsold: '2.2k Sold',
		price: 'PHP 1,200 ONLY!',
		reviews: [
			{
				icon: 'user1.jpg',
				name: 'Joji Sta Maria',
				date: 'February 14, 2020',
				time: 'Last Week',
				title: 'this was nice in buy',
				desc: 'this was nice in buy. I really like the shorts its so short',
			},
			{
				icon: 'user2.jpg',
				name: 'Mamamoo_123',
				date: 'January 03, 2020',
				time: 'Last Month',
				title: 'FAB!',
				desc: 'I wore this shorts during my drag night and I won!',
			},
			{
				icon: 'user3.png',
				name: 'SailorMoon_XDXDXD',
				date: 'January 29, 2019',
				time: 'Last Year',
				title: 'We Love it so much!',
				desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
			},
			]
    	});
    },

    getTumbler: function (req, res) {
		res.render('products', {
      	title: 'BlenderBottle Shaker',
      	img: 'tumbler.png',
      	desc: 'A state-of-the-art shaker. Leak-proof and highly secure; built with a masterful mixing system, ' +
            'namely the the BlenderBall® wire whisk, which guarantees smooth, luscious protein shakes; a percentage of ' +
            'every REEF BlenderBottle® sale goes to the Save Philippine Seas organization.',
      	rating: '4.2k Ratings',
      	numsold: '5.4k Sold',
      	price: 'PHP 400 ONLY!'
    	});
    },

    getJumpRope: function (req, res) {
		res.render('products', {
      	title: 'Jump Rope',
      	img: 'jumprope.png',
      	desc: 'Go back to a healthy lifestyle with this cute and durable jump rope! Say bye to the extra fats, ' +
            'and say hello to sexy, new you!',
      	rating: '1.7k Ratings',
      	numsold: '2.5k Sold',
      	price: 'PHP 150 ONLY!'
    	});
    },

    getWhey: function (req, res) {
		res.render('products', {
      	title: 'Just Melon Milk Whey Protein (454g) ',
      	img: 'whey.png',
      	desc: 'Made with a combination of all-natural sweetener, melon flavor and pure whey protein base; ' +
            'provides the energy; enhances endurance; provides super fresh and delicious nutrition; proudly ' +
            'made in a cGMP, Halal-certified, HACCP-compliant facility located right at the heart of the Philippines',
      	rating: '1.1k Ratings',
      	numsold: '1.5k Sold',
      	price: 'PHP 900 ONLY!'
    	});
    },

    getSportsBra: function (req, res) {
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
        numsold: '5.5k Sold',
		price: 'PHP 1,250 ONLY!',
		reviews: [
			{
				icon: 'user1.jpg',
				name: 'Joji Sta Maria',
				date: 'February 14, 2020',
				time: 'Last Week',
				title: 'this was nice in buy',
				desc: 'this was nice in buy. I really like the shorts its so short',
			},
			{
				icon: 'user2.jpg',
				name: 'Mamamoo_123',
				date: 'January 03, 2020',
				time: 'Last Month',
				title: 'FAB!',
				desc: 'I wore this shorts during my drag night and I won!',
			},
			{
				icon: 'user3.png',
				name: 'SailorMoon_XDXDXD',
				date: 'January 29, 2019',
				time: 'Last Year',
				title: 'We Love it so much!',
				desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
			},
			]
    	});
    },

    // END OF FITNESS PRODUCTS

    // FASHION PRODUCTS

    getDress: function (req, res) {
		res.render('products', {
      	title: 'Denim Dress',
      	img: 'dress.png',
      	desc: 'Beat the heat with this flowy and sleeveless dress this summer. Cute denim dress you can wear ' +
            'in different locations. Slay your travel photos while wearing this dress!',
      	rating: '2k Ratings',
      	numsold: '1.2k Sold',
		price: 'PHP 250 ONLY!',
		reviews: [
			{
				icon: 'user1.jpg',
				name: 'Joji Sta Maria',
				date: 'February 14, 2020',
				time: 'Last Week',
				title: 'this was nice in buy',
				desc: 'this was nice in buy. I really like the shorts its so short',
			},
			{
				icon: 'user2.jpg',
				name: 'Mamamoo_123',
				date: 'January 03, 2020',
				time: 'Last Month',
				title: 'FAB!',
				desc: 'I wore this shorts during my drag night and I won!',
			},
			{
				icon: 'user3.png',
				name: 'SailorMoon_XDXDXD',
				date: 'January 29, 2019',
				time: 'Last Year',
				title: 'We Love it so much!',
				desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
			},
			]
    	});
    },

    getStripes: function (req, res) {
		res.render('products', {
      	title: 'Stripes Shirt',
      	img: 'stripes.png',
      	desc: 'A classic striped crop top with a flirty little heart at the middle. ' +
            'Spice up your ootd by wearing this shirt that is perfect with anything!',
      	rating: '2.4k Ratings',
      	numsold: '4.3k Sold',
		price: 'PHP 250 ONLY!',
		reviews: [
			{
				icon: 'user1.jpg',
				name: 'Joji Sta Maria',
				date: 'February 14, 2020',
				time: 'Last Week',
				title: 'this was nice in buy',
				desc: 'this was nice in buy. I really like the shorts its so short',
			},
			{
				icon: 'user2.jpg',
				name: 'Mamamoo_123',
				date: 'January 03, 2020',
				time: 'Last Month',
				title: 'FAB!',
				desc: 'I wore this shorts during my drag night and I won!',
			},
			{
				icon: 'user3.png',
				name: 'SailorMoon_XDXDXD',
				date: 'January 29, 2019',
				time: 'Last Year',
				title: 'We Love it so much!',
				desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
			},
			]  
    	});
    },

    getBucketHat: function (req, res) {
		res.render('products', {
      	title: 'Bucket Hat',
      	img: 'buckethat.png',
      	desc: 'A basic black bucket hat to complete your outfit. Perfect for your summer outings.',
      	rating: '1.3k Ratings',
      	numsold: '3.2k Sold',
      	price: 'PHP 100 ONLY!'
    	});
    },

    getSweater: function (req, res) {
		res.render('products', {
      	title: 'Grey Sweater',
      	img: 'sweater.png',
      	desc: 'A basic gray sweater perfect during the rainy season. It is soft and comfortable to wear.',
      	rating: '2.7k Ratings',
      	numsold: '3.4k Sold',
		price: 'PHP 450 ONLY!',
		reviews: [
			{
				icon: 'user1.jpg',
				name: 'Joji Sta Maria',
				date: 'February 14, 2020',
				time: 'Last Week',
				title: 'this was nice in buy',
				desc: 'this was nice in buy. I really like the shorts its so short',
			},
			{
				icon: 'user2.jpg',
				name: 'Mamamoo_123',
				date: 'January 03, 2020',
				time: 'Last Month',
				title: 'FAB!',
				desc: 'I wore this shorts during my drag night and I won!',
			},
			{
				icon: 'user3.png',
				name: 'SailorMoon_XDXDXD',
				date: 'January 29, 2019',
				time: 'Last Year',
				title: 'We Love it so much!',
				desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
			},
			]  
    	});
    },

    getPoloShirt: function (req, res) {
		res.render('products', {
      	title: 'Beige Polo Shirt',
      	img: 'poloshirt.png',
      	desc: 'Beige polo shirt that is perfect for any ocassion! Easy and breathable fabric that is perfect ' +
            'for the summer season!',
      	rating: '2k Ratings',
      	numsold: '1.2k Sold',
		price: 'PHP 350 ONLY!',
		reviews: [
			{
				icon: 'user1.jpg',
				name: 'Joji Sta Maria',
				date: 'February 14, 2020',
				time: 'Last Week',
				title: 'this was nice in buy',
				desc: 'this was nice in buy. I really like the shorts its so short',
			},
			{
				icon: 'user2.jpg',
				name: 'Mamamoo_123',
				date: 'January 03, 2020',
				time: 'Last Month',
				title: 'FAB!',
				desc: 'I wore this shorts during my drag night and I won!',
			},
			{
				icon: 'user3.png',
				name: 'SailorMoon_XDXDXD',
				date: 'January 29, 2019',
				time: 'Last Year',
				title: 'We Love it so much!',
				desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
			},
			]  
    	});
    },

    // END OF FASHION PRODUCTS

    // HEALTH PRODUCTS

    getCollagen: function (req, res) {
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
      	numsold: '2.5k Sold',
      	price: 'PHP 950 ONLY!'
    	});
    },

    getKeto: function (req, res) {
		res.render('products', {
      	title: 'Exogenous Ketone Base',
      	img: 'keto.png',
      	desc: 'Immediately raises ketone levels; improves athletic performance; eliminates keto flu symptoms, ' +
            'which can come up during transition; keeps you energized and alert; has a rich chocolate flavor.',
      	rating: '1.4k Ratings',
      	numsold: '1.9k Sold',
      	price: 'PHP 850 ONLY!'
    	});
    },

    getTums: function (req, res) {
		res.render('products', {
      	title: 'Tums Antacid Chewable Tablets',
      	img: 'tums.png',
      	desc: 'AmericaÍs #1 antacid; relieves heartburn, sour stomach, acid indigestion, and upset stomach; ' +
            'travels directly to the source of heartburn, neutralizes acid on contract, and provides pain relief ' +
            'in seconds; has a tasty tropical fruit flavor',
      	rating: '2.7k Ratings',
      	numsold: '3.2k Sold',
      	price: 'PHP 900 ONLY!'
    	});
    },

    getGoli: function (req, res) {
		res.render('products', {
      	title: 'Apple Cider Vinegar Gummies',
      	img: 'goli.png',
      	desc: 'Improves digestion and metabolism; boosts energy; reduces water retention; has high levels of amino ' +
            'acids, potassium, and enzymes; clears the complexion and promotes healthy, glowing skin',
      	rating: '3.4k Ratings',
      	numsold: '4.3k Sold',
      	price: 'PHP 600 ONLY!'
    	});
    },

    getHoney: function (req, res) {
		res.render('products', {
      	title: 'Honey',
      	img: 'honey.png',
      	desc: 'Known to be used by ancient Egyptians as an embalming fluid and to dress wounds; has anti-bacterial ' +
            'and anti-inflammatory properties; treats and prevents acne; helps fight free radicals; boosts ' +
            'complexion with soothing and moisturizing properties; unclogs and clears pores',
      	rating: '2.3k Ratings',
      	numsold: '2.8k Sold',
      	price: 'PHP 250 ONLY!'
    	});
    },

    // END OF HEALTH PRODUCTS

    // NEW RELEASE PRODUCTS

    getWindbreaker: function (req, res) {
		res.render('products', {
      	title: 'Nike Windbreaker',
      	img: 'nike.png',
      	desc: 'More than a direct descendant, the Nike Windrunner Jacket is made to look and feel just ' +
            'like the original Windrunner from 1978. It has a breathable mesh lining, ribbed cuffs and the ' +
            'iconic chevron at the chest.',
      	rating: '1.3k Ratings',
      	numsold: '3.2k Sold',
		price: 'PHP 850 ONLY!',
		reviews: [
			{
				icon: 'user1.jpg',
				name: 'Joji Sta Maria',
				date: 'February 14, 2020',
				time: 'Last Week',
				title: 'this was nice in buy',
				desc: 'this was nice in buy. I really like the shorts its so short',
			},
			{
				icon: 'user2.jpg',
				name: 'Mamamoo_123',
				date: 'January 03, 2020',
				time: 'Last Month',
				title: 'FAB!',
				desc: 'I wore this shorts during my drag night and I won!',
			},
			{
				icon: 'user3.png',
				name: 'SailorMoon_XDXDXD',
				date: 'January 29, 2019',
				time: 'Last Year',
				title: 'We Love it so much!',
				desc: 'It was a gift for my side chick, but my wife caught me, so she have it know and she loves it!',
			},
			]  
    	});
    },

    getVictoria: function (req, res) {
		res.render('products', {
      	title: 'Victorias Secret Perfume',
      	img: 'victoria.png',
      	desc: 'Our iconic fragrance, in a light-as-air mist. Mysterious & irresistible, your sexy secret weapon. ' +
            'Dont Quit Your Daydream is a sheer veil of florals with skin-like warmth. Pair with your Eau' +
            ' de Parfum for a more lasting fragrance experience.',
      	rating: '2.1k Ratings',
      	numsold: '4.5k Sold',
      	price: 'PHP 950 ONLY!'
    	});
    },

    getSunglasses: function (req, res) {
		res.render('products', {
      	title: 'Sunglasses',
      	img: 'sunglasses.png',
      	desc: 'Looking for a KILLER frame for that killer outfit ? look no further, ZARA will complete that fierce look. ' +
            'These extremely exaggerated cat eye sunnies are made of high quality plastic materials and include all ' +
            'the sass for your spring look. Hinges are reinforced with metal strength and lenses are coated with 100% ' +
            'UV protected coating.',
      	rating: '3.2k Ratings',
      	numsold: '5k Sold',
      	price: 'PHP 750 ONLY!'
    	});
    }

    // END OF NEW RELEASE PRODUCTS
}

module.exports = productController;
