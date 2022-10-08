const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const { clotheSchema } = require('./clothe');
const { customerSchema } = require('./customer');

const Purchase = mongoose.model('Purchase', new mongoose.Schema({
    customer: {
        // // type: new mongoose.Schema({
        //     name: {
        //         type: String,
        //         minlength: 3,
        //         maxlength: 300,
        //         required: true
        //     },
        //     phone: {
        //         type: String,
        //         required: true
        //     },
        //     email: {
        //         type: String,
        //         required: true
        //     }   
        // // }),
        // // required: true  
        type: customerSchema
    
    },
    clothe: {
        type: clotheSchema
        // // type: new mongoose.Schema({
        //     name: {
        //         type: String,
        //         minlength: 3, 
        //         maxlength: 300,
        //         required: true
        //     },
        //     genre: {
        //         type: String,
        //         required: true
        //     }           
        // }),
        // required: true
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