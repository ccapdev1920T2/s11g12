const categoryController = {

    getBeauty: function (req, res) {

        res.render('categories', {
            title: 'Ganda ka Teh? ♡ Beauty',
            activebanner: 'beautybanner1.png',
            banners: [
                {
                image: 'beautybanner2.png',
                count: '1'
                },
                {
                image: 'beautybanner3.png',
                count: '2'
                },
            ],
            category: 'beauty',
            gif: 'flower.gif',
            gifclass: 'flower',
            quote: '"Beauty, to me, is about being comfortable in your own skin. That or a kick-ass red lipstick." - Gwyneth Paltrow',
            activelink: '/carmex',
            activeimg: 'carmex.png',
            products: [
                {
                link: '/marcjacobs',
                image: 'MJMascara.png',
                },
                {
                link: '/maclipstick',
                image: 'maclipstick.png',
                },{
                link: '/brpalette',
                image: 'brpalette.png',
                },{
                link: '/serum',
                image: 'serum.png',
                },
            ]
        });
    }, 
    
    getFitness: function(req, res) {

        res.render('categories', {
            title: 'Ganda ka Teh? ♡ Fitness',
            activebanner: 'fitnessbanner1.png',
            banners: [
                {
                image: 'beautybanner3.png',
                count: '1'
                },
            ],
            category: 'fitness',
            gif: 'barbell.gif',
            gifclass: 'barbell',
            quote: '"If you still look cute after you work out, you didn\'t train hard enough." - Google Quotes',
            activelink: '/yogapants',
            activeimg: 'yogapants.png',
            products: [
                {
                link: '/tumbler',
                image: 'tumbler.png',
                },
                {
                link: '/jumprope',
                image: 'jumprope.png',
                },{
                link: '/whey',
                image: 'whey.png',
                },{
                link: '/sportsbra',
                image: 'sportsbra.png',
                },
            ],
        });
    },

    getFashion: function(req, res) {

        res.render('categories', {
            title: 'Ganda ka Teh? ♡ Fashion',
            activebanner: 'fashionbanner1.png',
            banners: [
                {
                image: 'fashionbanner2.png',
                count: '1'
                },
                {
                image: 'beautybanner3.png',
                count: '2'
                },
            ],
            category: 'fashion',
            gif: 'hearts.gif',
            gifclass: 'hearts',
            quote: '"Everyday is a fashion show and the world is your runway." - Coco Chanel',
            activelink: '/dress',
            activeimg: 'dress.png',
            products: [
                {
                link: '/stripes',
                image: 'stripes.png',
                },
                {
                link: '/buckethat',
                image: 'buckethat.png',
                },{
                link: '/sweater',
                image: 'sweater.png',
                },{
                link: '/poloshirt',
                image: 'poloshirt.png',
                },
            ],
        });
    },

    getHealth: function(req, res) {

        res.render('categories', {
            title: 'Ganda ka Teh? ♡ Health',
            activebanner: 'healthbanner1.png',
            banners: [
                {
                image: 'beautybanner3.png',
                count: '1'
                },
            ],
            category: 'health',
            gif: 'leaves.gif',
            gifclass: 'leaves',
            quote: '"It is health that is real wealth and not pieces of gold and silver." - Mahatma Gandhi',
            activelink: '/collagen',
            activeimg: 'collagen.png',
            products: [
                {
                link: '/keto',
                image: 'keto.png',
                },
                {
                link: '/tums',
                image: 'tums.png',
                },{
                link: '/goli',
                image: 'goli.png',
                },{
                link: '/honey',
                image: 'honey.png',
                },
            ],
        });
    }

}

module.exports = categoryController;