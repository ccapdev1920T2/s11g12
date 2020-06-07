
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var LogSchema = new mongoose.Schema({
    logged: {
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
module.exports = mongoose.model('Log', LogSchema);
