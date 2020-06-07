
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var CatSchema = new mongoose.Schema({
    type: {
        type: String
    },
    title: {
        type: String,
    },
    activebanner: {
		type: String
    },
    banners: [{
        type: String
    }],
    gif: {
        type: String
    },
    gifclass: {
        type: String
    },
    quote: {
        type: String
    },
    activeimg: {
        type: String
    },
    actname: {
        type: String
    },
    count: [{
        type: Number
    }]
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('Category', CatSchema);
