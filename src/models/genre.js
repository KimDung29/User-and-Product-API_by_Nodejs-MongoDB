const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 300,
        required: true
    }
});

const Genre = mongoose.model('Genre', genreSchema); 

function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(300).required()
    });
    return schema.validate(genre);
}

module.exports.Genre = Genre;
module.exports.genreSchema = genreSchema;
module.exports.validateGenre = validateGenre;