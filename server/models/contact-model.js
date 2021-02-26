const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contact = new Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String },
        phone: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('contacts', Contact)