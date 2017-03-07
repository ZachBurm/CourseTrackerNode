const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FocusSchema = new Schema({
	
	name: String,
	numHours: Number,
	numMinors: Number,
	abbrv: String,
	type: String,
	cores: [{ 
		type: Schema.Types.ObjectId,
		ref: 'course'
	}],
	electives: [{ 
		type: Schema.Types.ObjectId,
		ref: 'course'
	}]
	
});

const Focus = mongoose.model('focus', FocusSchema);

module.exports = Focus;