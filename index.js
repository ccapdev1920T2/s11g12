// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const routes = require('./routes/routes.js');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const moment = require('moment');

// Creates the express application
const app = express();
const port = process.env.PORT || 3000;
const db = require('./models/db.js');
const data = require('./adddata.js');

app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(cookieparser());
app.use(bodyparser.json());
/**
  Creates an engine called "hbs" using the express-handlebars package.
**/
app.engine( 'hbs', exphbs({
  extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
  defaultView: 'homepage', // this is the default value but you may change it to whatever you'd like
  //layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
  partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
  // Additional helpers declared to reformat text prior to rendering
  helpers: {
    cap: function(text) { 
      return text.toUpperCase(); 
    },
    if_eq: function(a, b, opts) {
      if (a == b) {
          return opts.fn(this);
      } else {
          return opts.inverse(this);
      }
    },
    if_gr: function(a, b, opts) {
      if (a.setDate(a.getDate()+ 1) >= b.getDate()) {
          return opts.fn(this);
      } else {
          return opts.inverse(this);
      }
    },
    dateFormat: function(date){
      moment.suppressDeprecationWarnings = true;
      return moment(date).format("MMM DD, YYYY");
    }
  }
}));

handlebars.registerHelper('if_deq', function(a, b, opts) {
  if (a.getDate() == b.getDate()) {
      return opts.fn(this);
  } else {
      return opts.inverse(this);
  }
});

// Setting the view engine to the express-handlebars engine we created
app.set('view engine', 'hbs');

app.use('/', routes);


app.use(express.static('images'));
app.use(express.static('public'));

db.connect();
data.addData();
// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});
