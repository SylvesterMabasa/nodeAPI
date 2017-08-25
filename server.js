require('dotenv').config();

const config = require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const parks = require('./api/routes/parksRoutes');



var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(config.url, err => {
	if(err) throw err
		else console.log('connection successful')
});

mongoose.Promise = Promise;

app.use('/parks', parks);

app.listen(config.port);
console.log('Listening '+config.port);

module.exports = app;