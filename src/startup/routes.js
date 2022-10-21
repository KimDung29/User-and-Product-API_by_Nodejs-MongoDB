const express = require('express');
const purchases = require('../routes/purchases');
const clothes = require('../routes/clothes');
const customers = require('../routes/customers');
const genres = require('../routes/genres');
const users = require('../routes/users');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/purchases', purchases);
    app.use('/api/clothes', clothes);
    app.use('/api/customers', customers);
    app.use('/api/genres', genres);
    // app.use('/api/users', users);
}
