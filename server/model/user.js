var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: { type: String, require: true },
    lastName: { type: String, require: true }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('user', schema);
