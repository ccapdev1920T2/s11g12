

const newreleaseController = {

    getNewRelease: function (req, res) {
		  res.render('newrelease', {
        title: 'Ganda ka Teh? ♡ New Releases',
        prod1: 'nike.png',
        prod2: 'victoria.png',
        prod3: 'sunglasses.png'
      });
    }   
}

module.exports = newreleaseController;
