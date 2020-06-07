
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var RevSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    name: {
      type: String
    },
    item: {
		type: String
    },
    date: {
        type: Date
    },
    photo: {
      type: String
    },
    rating: {
      type: Number
    },
    message: {
      type: String
    },
    title: {
      type: String
    }
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('Review', RevSchema);
