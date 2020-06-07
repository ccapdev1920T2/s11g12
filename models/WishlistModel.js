
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var WishlistSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    item: [{
		type: String
	}],
    photo: [{
		type: String
    }],
    price: [{
        type: Number
    }],
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('Wishlist', WishlistSchema);
