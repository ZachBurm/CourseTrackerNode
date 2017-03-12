const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	
	name: String,
	courseNum: Number,
	numHours: Number,
	enrolledStudents: [{ 
		type: Schema.Types.ObjectId,
		ref: 'student'
	}],
	plannedStudents: [{ 
		type: Schema.Types.ObjectId,
		ref: 'student'
	}],
	completedStudents: [{ 
		type: Schema.Types.ObjectId,
		ref: 'student'
	}]
	
});

const Course = mongoose.model('course', CourseSchema);

module.exports = Course;

