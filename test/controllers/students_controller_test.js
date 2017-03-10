const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Student = mongoose.model('student');
const Focus = mongoose.model('focus');
const Course = mongoose.model('course');

describe('Students Controller', () => {
	/*hey*/
	
	it('POST to /api/students creates a new student', (done) => {	
		Student.count().then( count => {
			
			request(app)
			.post('/api/students')
			.send({ name: 'Zach' , email: 'zburm@me.com', password: 'zach' })
			.end(() => {
				Student.count().then(newCount => {
					assert(count + 1 === newCount);
					done();
				})
			});
			
		});
	});	
	
	
	it('PUT to /api/students/id edits a students properties', (done) => {
		
		const student = new Student({ name: 'Zach', email: 'zb@burm.com', password: 'other' });
		student.save().then(() => {
			request(app)
				.put(`/api/students/${student._id}`)
				.send({ password: 'zach' })
				.end(() => {
					Student.findOne({ email: 'zb@burm.com' })
						.then(student => {
							assert(student.password === 'zach');
							done();
						});
				});
		});
		
	});
	
	
	it('GET to /api/students/email/password a student', (done) => {
		
		const student = new Student({ name: 'Zach', email:'z@burm.com', password: 'hey' });
		
		student.save().then(() => {
			request(app)
			.get(`/api/students/${student.email}/${student.password}`)
			.end((err, response) => {
				assert(response.body[0]._id.toString() === student._id.toString());
				done();
			});


		});
	});	
	
	it('DELETE to /api/students/id deletes all students', (done) => {
		
		const student = new Student({ name: 'Zach', email:'z@burm.com', password: 'hey' });
		
		student.save().then(() => {
			request(app)
				.delete(`/api/students/${student._id}`)
				.end((err, response) => {
					Student.count().then( newCount => {
						assert(newCount === 0);
						done();
					});
	
				});
			

		});
	});	
	
	
	
	
});