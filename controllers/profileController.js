
const express = require('express')
const app = express()


var bodyParser = require('body-parser');
app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));

const profileController =
{


    getProfile: function (req, res) {

      var email = "wendell@gmail.com";

      var user1 = "wendell@gmail.com";
      var user2 = "kristal@gmail.com";

      if(email.localeCompare(user1) == 0){
        res.render('profile', {
          title: 'My profile',
          name: 'Vhino Ramos',
          email: 'wendell@gmail.com',
          num: '09171907495',
          address: 'Town and Country Exec. Village, Antipolo City',
          profpic: 'vhino.jpg'
        });
      }
      else if(email.localeCompare(user2) == 0){
        res.render('profile', {
          title: 'My profile',
          name: 'Kristal Ambrosio',
          email: 'kristal@gmail.com',
          num: '09171907999',
          address: 'Dasmarinas, Cavite',
          profpic: 'kristal.jpg'
        });
      }

    }
}

module.exports = profileController;
