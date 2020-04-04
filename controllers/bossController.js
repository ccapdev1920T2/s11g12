const bossController = {

    getBoss: function (req, res) {

        res.render('boss', {
            title: 'OUR BOSSES',
        });
    }   
}

module.exports = bossController;