const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    name: { type: String, required: true },
    ownsPets: { type: Boolean, required: true },
    numberOfPets: { type: Number },
    petTypes: [{ type: String }],
    acquisitionMethods: [{ type: String }]
});

module.exports = mongoose.model('Survey', surveySchema);
