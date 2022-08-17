const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SuggestSchema = new Schema({
    name: {
        type: String,
    },
    tel: {
        type: String,
    },
    sugg: {
        type: String,
    },
    type: {
        type: String,
    }
})

module.exports = mongoose.model("Suggest", SuggestSchema)