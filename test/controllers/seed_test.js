const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Student = mongoose.model('student');
const Focus = mongoose.model('focus');
const Course = mongoose.model('course');

describe('Students Controller', () => {
	
	beforeEach((done) => {
		
		request(app)
			.post('/api/students/seedDB')
			.end(() => done());
		
	});	
	
	it('GET to /api/allMajors gets all majors', (done) => {	
		request(app)
			.get('/api/allMajors')
			.end((err, response) => {
				assert(response.body.length === 2);
				done();
			});	
	});
	
	it('GET to /api/allMinors gets all minors', (done) => {	
		request(app)
			.get('/api/allMinors')
			.end((err, response) => {
				assert(response.body.length === 3);
				done();
			});	
	});
	
	it('GET to /api/allCourses gets all courses', (done) => {	
		request(app)
			.get('/api/allCourses')
			.end((err, response) => {
				assert(response.body.length === 22);
				done();
			});	
	});
	
	xit('DELETE to /api/dropDB/pass deletes all', (done) => {	
		request(app)
			.delete('/api/dropDB/zach')
			.end((err, response) => {
				console.log(response.body);
				assert(response.body === 'done');
				done();
			});	
	});
	
	
	
});