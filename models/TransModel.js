
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var TransSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    id: {
        type: String
    },
    amount: {
        type: Number
    },
    items: [{
		type: String
    }],
    photos: [{
		type: String
    }],
    prices: [{
		type: Number
    }],
    dateOrd: {
        type: Date
    },
    dateRec: {
        type: Date
    },
    dateToday: {
        type: Date
    },
    cancelled: {
        type: Number,
        default: 0
    },
    returned: {
        type: Number,
        default: 0
    },
    delivered: {
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
module.exports = mongoose.model('Transaction', TransSchema);
