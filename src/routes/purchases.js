const { Purchase, validatePurchase } = require('../models/purchase');
const { Customer } = require('../models/customer');
const { Clothe } = require('../models/clothe');
const lodash = require('lodash');

const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const purchases = await Purchase.find();
    res.send(purchases);
});

router.post('/', async(req, res) => {
    const {error} =  validatePurchase(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.cusomerId);
    if (customer) return res.status(404).send('The customer with given ID was not found.');

    const clothe = await Clothe.findById(req.body.clotheId);
    if (!clothe) return res.status(400).send('The clothe with given ID was not found.');

    if (clothe.numberInStock === 0 ) return res.send('The clothe not in stock.');

    let purchase = new Purchase({
        customer: {
            _id: customer._id
            // name: req.body.name,
            // phone: req.body.phone,
            // email: req.body.email
        },
        clothe: {
            _id: clothe._id
            // name: req.body.name,
            // genre: req.body.genre
        },
        numberInStock: req.body.numberInStock,
        price: req.body.price
    });
    purchase = await purchase.save();
    res.send(purchase);
});

router.put('/:id', async(req, res) => {
    const {error} =  validatePurchase(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const purchase = await Purchase.findByIdAndUpdate(
        req.params.id,
        {
            customer: req.body.customer,
            clothe: req.body.clothe,
            numberInStock: req.body.numberInStock,
            price: req.body.price
        },
        { new: true }
    );
    if (! purchase) return res.status(404).send('Could not update purchase.');
    res.send(purchase);
});

router.delete('/:id', async(req, res) => {
    const purchase = await Purchase.findByIdAndRemove(req.params.id);
    if (!purchase ) return res.status(404).send('Could not delete.');

    res.send(purchase);
});

router.get('/:id', async(req, res) => {
    const purchase = await Purchase.findById(req.params.id);
    if (!purchase) return res.status(404).send('The id was not found.');

    res.send(purchase);
});

module.exports = router;