/*
const mongoose = require('mongoose');
const CourseSchema = require('./course');
const Schema = mongoose.Schema;

const MajorSchema = new Schema({
	
	name: String,
	numHours: Number,
	numMinors: Number,
	abbrv: String,
	cores: [CourseSchema],
	electives: [CourseSchema]
	
});

const Major = mongoose.model('major', MajorSchema);

module.exports = Major;
*/