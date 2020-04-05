

const promosController = {

    getPromos: function (req, res) {
		res.render('promos', {
      title: 'Ganda ka Teh? ♡ Promos',
      prod1: 'promos1.png',
      prod2: 'promos2.png',
      prod3: 'promos3.png'
      });
    }   
}

module.exports = promosController;
