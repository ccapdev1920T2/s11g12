const checkoutController = {

    getCheckout: function (req, res) {

        res.render('checkout', {
            title: 'CHECKOUT',
        });
    }   
}

module.exports = checkoutController;