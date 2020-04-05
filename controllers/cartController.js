

const cartController = {

    getCart: function (req, res) {
		res.render('cart', {
      	title: 'MY CART',
    	});
    }   
}

module.exports = cartController;
