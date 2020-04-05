
/*
    defines an object which contains functions executed as callback
    when a client requests for `index` paths in the server
*/
const controller = {

    /*
        executed when the client sends an HTTP GET request `/`
        as defined in `../routes/routes.js`
    */
    getHomepage: function (req, res) {

        // render `../views/index.hbs`
        res.render('homepage', {
            title: 'HOME',
        });
    }
}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = controller;
