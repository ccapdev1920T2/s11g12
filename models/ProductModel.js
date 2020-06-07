
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var ProdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
		type: String
	},
    photo: {
		type: String
    },
    price: {
        type: Number
    },
    reviews: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    desc: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    }
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('Product', ProdSchema);
