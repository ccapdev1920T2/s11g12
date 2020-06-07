
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var HisSchema = new mongoose.Schema({
    email: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    photo: {
		type: String
    },
    price: {
        type: Number
    },
    dateOrd: {
        type: Date
    },
    quantity: {
        type: Number
    },
    status: {
        type: String
    }
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('History', HisSchema);
