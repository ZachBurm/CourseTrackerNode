/*
const mongoose = require('mongoose');
const CourseSchema = require('./course');
const Schema = mongoose.Schema;

const MinorSchema = new Schema({
	
	name: String,
	numHours: Number,
	cores: [CourseSchema],
	electives: [CourseSchema]
	
});

const Minor = mongoose.model('minor', MinorSchema);

module.exports = Minor;
*/