const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const parks = require('./api/routes/parksRoutes');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://sylvester:sylvester@ds157233.mlab.com:57233/parks', err => {
	if(err) throw err
		else console.log('connection successful')
});

mongoose.Promise = Promise;

app.use('/parks', parks);

app.listen(port);
console.log('Listening '+port);

module.exports = app;