var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new mongoose.Schema({
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    title : { type: String, require: true },
    description : { type: String, require: true },
    code : { type: String, require: true },
    tag : { type: String, require: true },
    owner: { type: Schema.Types.ObjectId, ref: 'user' }
},{
	versionKey: false 
});

module.exports = mongoose.model('snippet', schema);
