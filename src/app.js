const express = require('express');
const httpErrors = require('http-errors');

const app = express();

// Logger.
app.use( (req, res, next) => {
    const message = `${req.method} ${req.url} ${new Date()}`;
    console.log(message);

    next();
});

app.use(express.static('public'));

app.use( (req, res, next) => {
    res.send(`<h1>Hello from Express!</h1>
    <img src="img/state-management-lifecycle.png" alt="#">`);
});

module.exports = app;
