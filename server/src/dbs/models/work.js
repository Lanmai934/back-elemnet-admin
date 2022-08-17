const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkSchema = new Schema({
    type: {
        type: String,
    },
    workname: {
        type: String,
    },
    date: {
        type: String,
    },
    work: {
        type: String,
    },
    sum: {
        type: String,
    },
    workdate: {
        type: String,
    },
    ask1: {
        type: Object,
    },
    ask2: {
        type: Object,
    },

})

module.exports = mongoose.model("Work", WorkSchema)