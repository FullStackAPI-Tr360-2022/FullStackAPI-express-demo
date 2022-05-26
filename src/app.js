const express = require('express');
const httpErrors = require('http-errors');
const config = require('config');
const mongoose = require('mongoose');

const logger = require('./module/logger');

const app = express();

const { host, user, pass } = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass,
}).then(
    conn => {
        require('./seed/seeder');
        console.log('Database is seeded!');
    },
).catch(
    err => console.error(err),
);

// Logger.
app.use( logger );

app.use(express.static('public'));

app.use( (req, res, next) => {
    res.send(`<h1>Hello from Express!</h1>
    <img src="img/state-management-lifecycle.png" alt="#">`);
});

module.exports = app;
