const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Produt", ProductSchema)