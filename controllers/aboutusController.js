const aboutusController = {

    getAboutUs: function (req, res) {

        res.render('aboutus', {
            title: 'ABOUT US',
        });
    }   
}

module.exports = aboutusController;