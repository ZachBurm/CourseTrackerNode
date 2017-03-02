const mongoose = require('mongoose');
//const StudentSchema = require('./student');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	
	name: String,
	courseNum: Number,
	numHours: Number
	//enrolledStudents: [StudentSchema]
/*
	plannedStudents: [StudentSchema],
	completedStudents: [StudentSchema]
*/
	
});

//const Course = mongoose.model('course', CourseSchema);

module.exports = CourseSchema;