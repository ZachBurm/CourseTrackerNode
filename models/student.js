const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
	
	name: {
		type: String,
		required: true
	},
	
	email: {
		type: String
	},
	
	password: String,
	standing: Number,
	majors: [{ 
		type: Schema.Types.ObjectId,
		ref: 'focus'
	}],
	minors: [{ 
		type: Schema.Types.ObjectId,
		ref: 'focus'
	}],
	commons:[{ 
		type: Schema.Types.ObjectId,
		ref: 'focus'
	}]
	
	
	
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;