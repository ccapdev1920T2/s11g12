// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const routes = require('./routes/routes.js');

// Creates the express application
const app = express();
const port = 3000;

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
    }
  }
}));

// Setting the view engine to the express-handlebars engine we created
app.set('view engine', 'hbs');

app.use('/', routes);


app.use(express.static('images'));
app.use(express.static('public'));

// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});
