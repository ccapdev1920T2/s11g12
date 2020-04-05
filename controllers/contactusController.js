

const contactusController = {

    getContactUs: function (req, res) {

        res.render('contactus', {
        title: 'CONTACT US',
        });
    }   
}

module.exports = contactusController;
