const { Genre, validateGenre } = require('../models/genre');
const express = require('express');
const router = express.Router();

// get all
router.get('/', async(req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});
// post
router.post('/', async(req, res) => {
    const {error} = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({
        name: req.body.name
    });
    genre = await genre.save();

    res.send(genre);
});
// update one
router.put('/:id', async(req, res)=> {
    const {error} = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = Genre.findByIdAndUpdate(
        req.params.id,
        { name: req.body.id },
        { new: true}
    );
    
    if (!genre) return res.status(404).send('The genre with given ID was not found.');

    res.send(genre);
});
// delete one
router.delete('/:id', async(req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre) return res.status(404).send('The genre with given ID was not found.');

    res.send(genre);
});

// get one
router.get('/:id', async(req, res) => {
    const genre = await Genre.findById(req.params.id);

    if (!genre) return res.status(404).send('The genre with given ID was not found.');

    res.send(genre);
});

module.exports = router;