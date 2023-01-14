const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    kleur: {
        required: true,
        type: String
    },
    graan: {
        required: true,
        type: String
    },
    prijs: {
        minimum: 0,
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Brood', dataSchema)