// const Joi = require('joi');
// const mongoose = require('mongoose');
// const passwordComplexity = require("joi-password-complexity");

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         minlength: 3,
//         maxlength: 300,
//         required: true
//     },
//     email: {
//         type: String,
//         minlength: 10,
//         maxlength: 300,
//         require: true,
//         unique: true
//     },
//     password: {
//         min: 10,
//         max: 30,
//         lowerCase: 1,
//         upperCase: 1,
//         numeric: 1,
//         symbol: 1,
//         requirementCount: 2
//     }
// });

// const User = mongoose.model('User', userSchema); 

// function validateUser(user) {
//     const schema = Joi.object({
//         name: Joi.string().min(3).max(300).required(),
//         email: Joi.string().min(10).max(300).required().email(),
//         password: Joi.passwordComplexity().min(10).max(30).lowerCase(1).upperCase(1).numeric(1).symbol(1).requirementCount(2).required()
//     });
//     return schema.validate(user);
// }
// module.exports.userSchema = userSchema;
// module.exports.User = User;
// module.exports.validateUser = validateUser;