

const profileController = {

    getProfile: function (req, res) {
		  res.render('profile', {
      	title: 'My profile',
    	});
    }   
}

module.exports = profileController;
