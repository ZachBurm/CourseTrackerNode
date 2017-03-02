const mongoose = require('mongoose');
const CourseSchema = require('./course');
//const MajorSchema = require('./major');
//const MinorSchema = require('./minor');
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
	//majors: [MajorSchema],
	//minors: [MinorSchema],
	commons:[{ 
		type: Schema.Types.ObjectId,
		ref: 'course'
	}]
	
	
	
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;