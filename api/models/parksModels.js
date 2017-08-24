const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = new Schema ({

	name: {
		type: String
	},
	location: {
		type: String
	},
	entryfee: {
		type: Number
	},
	services: {
		type: Array
	}
});

delete mongoose.models.Park;

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;