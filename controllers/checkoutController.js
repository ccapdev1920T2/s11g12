
const checkoutController = {

    getCheckout: function (req, res) {
		res.render('checkout', {
      	title: 'Checkout',
    	});
    }   
}

module.exports = checkoutController;