const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const { customerSchema } = require('./customer');
const { clotheSchema } = require('./clothe');

const Purchase = mongoose.model('Purchase', new mongoose.Schema({
    customer: {
        type: customerSchema
    },
    clothe: {
        type: clotheSchema
    },
    numberInStock: {
        type: Number,
        min: 0
    }, 
    price: {
        type: Number,
        min: 0
    }
}));

function validatePurchase(purchase) {
    const schema = Joi.object({
        customerId: Joi.objectId().required(),
        clotheId: Joi.objectId().required(),
    });
    return schema.validate(purchase);
}

module.exports.Purchase = Purchase;
module.exports.validatePurchase = validatePurchase;