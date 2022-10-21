const { Clothe, validateClothe } = require('../models/clothe');
const { Genre } = require('../models/genre');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const clothes = await Clothe.find().sort('name');
    res.send(clothes);
});

router.post('/', async(req, res) =>{
    const {error} = validateClothe(req.body);
    if (error) return res.status(400).send(error.details.message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(404).send('The genre with given ID was not found.');

    const clothe = new Clothe({
        name: req.body.name,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock
    });
    await clothe.save(); 
    res.send(clothe);
});

router.put('/:id', async(req, res) => {
    const {error} = validateClothe(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(404).send('The genre with given ID was not found.')

    const clothe = await Clothe.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            genre: { _id: genre._id },
            numberInStock: req.body.numberInStock
        },
        { new: true }
    );

    if (!clothe) return res.status(404).send('The clothe with given ID was not found.');

    res.send(clothe);
});

router.delete('/', async(req, res) => {
    const clothe = await Clothe.findByIdAndRemove(req.params.id);

    if (!clothe) return res.status(404).send('The clothe with given ID was not found.');

    res.send(clothe);
});

router.get('/', async(req, res) => {
    const clothe = await Clothe.findById(req.params.id);
    
    if (!clothe) return res.status(404).send('The clothe with given ID was not found.');

    res.send(clothe);
});

module.exports = router;