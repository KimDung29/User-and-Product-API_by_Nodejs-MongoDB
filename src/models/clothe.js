const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');

const clotheSchema =  new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 300,
        required: true
    },
    genre: {
        type: genreSchema,
        require: true
    },
    numberInStock: {
        type: Number,
        min: 0,
        require: true
    }

});
const Clothe = mongoose.model('Clothe', clotheSchema);

function validateClothe(clothe) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(300).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0)
    });
    return schema.validate(clothe);
}
module.exports.clotheSchema = clotheSchema;
module.exports.Clothe = Clothe;
module.exports.validateClothe = validateClothe;