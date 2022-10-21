// const { User, validateUser } = require('../models/user');
// const _ = require('lodash');
// const express = require('express');
// const bcrypt = require('bcrypt');
// const router = express.Router();

// // router.get('/', async(req, res) => {
// //     const users = await User.find();
// //     res.send(users);
// // });

// router.post('/', async(req, res) => {
//     const { error } = validateUser(req.body);
//     if ( error ) return res.status(400).send(error.details[0].message);

//     let user = await User.findOne({ email: req.body.email });
//     if (user) return res.status(400).send('User already registered.');

//     user = new User(_.pick(req.body, ['name', 'email', 'password']));
//     const salt = await bcrypt.genSalt(10);

//     user.password = bcrypt.hash(user.password, salt);
//     await user.save();
    
//     res.send(_.pick(user, ['name', 'email'] ));
// });

// router.put('/:id', async(req, res) => {
//     const {error } = validateUser(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     const user = await User.findByIdAndUpdate(
//         req.params.id,
//         { email: req.body.email },
//         { new: true }
//     );
//     if (!user) return res.status(404).send('The user with the given ID was not found.');
    
//     res.send(user);
// });

// router.delete('/:id', async(req, res) => {
//     const user = await User.findByIdAndRemove(req.params.id);

//     if (!user) return res.status(404).send('The user with given ID was not found.');

//     res.send(user);
// });

// router.get('/:id', async(req, res) => {
//     const user = await User.findById(req.params.id);

//     if (!user) return res.status(404).send('The user with given ID was not found.');

//     res.send(user);
// });

// module.exports = router;