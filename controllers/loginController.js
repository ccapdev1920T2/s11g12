// import module from `../models/db.js`
const db = require('../models/db.js');
const bodyParser = require('body-parser');




// defines an object which contains functions executed as callback
// when a client requests for a certain path in the server
const loginController = {

    // executed when the client sends an HTTP GET request `/favicon.ico`
    // as defined in `../routes/routes.js`
    getFavicon: function (req, res) {
        res.status(204);
    },

    // executed when the client sends an HTTP GET request `/:username`
    // as defined in `../routes/routes.js`
    getProfile: function (req, res) {

        res.render('login');
    },

    postLogin: function(req, res)
    {
        var u = req.body.email;
        var p = req.body.passwordsi;

        var query = {email: u};

        db.findOne('profiles', query, function(result){

                if(p == result.password)
                {
                    res.render('profile', result);
                }
        });
    },

    
}

// exports the object `controller` (defined above)
// when another script exports from this file
module.exports = loginController;
