const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Student = mongoose.model('student');
//const Course = mongoose.model('course');

describe('Students Controller', () => {
	
	it('Post to /api/students creates a new student', (done) => {	
		Student.count().then( count => {
			
			request(app)
			.post('/api/students')
			.send({ name: 'Zach' , email: 'zburm@me.com' })
			.end(() => {
				Student.count().then(newCount => {
					assert(count + 1 === newCount);
					done();
				})
			});
			
		});
	});	
	
	it('GET to /api/students finds all students', (done) => {
		
		const student = new Student({ name: 'Zach', email:'z@burm.com', password: 'hey' });
		
		student.save().then(() => {
			Student.count().then( count => {
				request(app)
				.get('/api/students')
				.end((err, response) => {
					Student.count().then(newCount => {
					assert(response.body.length === newCount);
					done();
				})

				});
			});

		});
	});	
	
	
	
	
});