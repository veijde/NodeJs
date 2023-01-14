const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    naam: {
        required: true,
        type: String
    },
    adres: {
        required: true,
        type: String
    },
    leeftijd: {
        minimum: 0,
        required: true,
        type: Number
    },
    gsm_nummer: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Klant', dataSchema)