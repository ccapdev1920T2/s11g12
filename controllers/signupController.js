const signupController = {

    getSignup: function (req, res) {

        res.render('signup', {
            title: 'SIGN UP',
        });
    }   
}

module.exports = signupController;