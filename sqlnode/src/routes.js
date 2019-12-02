const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'world!' });
});

routes.get('/users', (req, res) => {

})

module.exports = routes;