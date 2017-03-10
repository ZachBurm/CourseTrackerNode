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
			.end(() => {
				done();
			});
		
	});
	
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
	
	it('Delete to /api/students deletes all students', (done) => {
		
		const student = new Student({ name: 'Zach', email:'z@burm.com', password: 'hey' });
		
		student.save().then(() => {
			Student.count().then( count => {
				request(app)
					.delete('/api/students')
					.end((err, response) => {
						assert(response.text === 'success');
						done();

					});
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
	
	
	it('GET to api/students/getMajor/:id gets the majors of a student', (done) => {
		const student = new Student({ name: 'Zach', email: 'zb@burm.com', password: 'other' });
		const major = new Focus({ name: 'Computer Science', numHours: 256, numMinors: 2, abbrv: 'COMP', type: 'Major' });

		Promise.all([student.save(), major.save()])	
		.then(() => {
			student.majors.push(major);
			student.save()
				.then(() => {
					request(app)
					.get(`/api/students/getMajor/${student._id}`)
					.end((err, response) => {
						done();
					});
				});
		});

				
	});
	
	
	
	
});