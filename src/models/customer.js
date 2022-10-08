const Joi = require('joi');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 300,
        required: true
    },
    phone: {
        type: String,
        minlength: 10,
        maxlength: 12,
        require: true
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 300,
        require: true
    }

});

const Customer = mongoose.model('Customer', customerSchema); 
function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(300).required(),
        phone: Joi.string().min(10).max(12).required(),
        email: Joi.string().min(10).max(300)
    });
    return schema.validate(customer);
}
module.exports.customerSchema = customerSchema;
module.exports.Customer = Customer;
module.exports.validateCustomer = validateCustomer;