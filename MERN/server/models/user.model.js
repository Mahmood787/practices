const mongoose = require('mongoose');

//define schema and name the collection
const user = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    pass: {type: String, required: true},
    quote: {type: String}
    },
    {
        collection: 'user-data'
    }
)

const model = mongoose.model("UserDate", user)

module.exports = model