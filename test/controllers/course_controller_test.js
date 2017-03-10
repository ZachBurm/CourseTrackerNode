const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Student = mongoose.model('student');
const Focus = mongoose.model('focus');
const Course = mongoose.model('course');

describe('Course Controller', () => {
	
	beforeEach(() => {
		
	});
	
	it('POST to /api/course creates a new course', (done) => {	
		Course.count().then( count => {
			
			request(app)
			.post('/api/course')
			.send({ name: 'Intro to Comp' , courseNum: 1000, numHours: 4 })
			.end(() => {
				Course.count().then(newCount => {
					assert(count + 1 === newCount);
					done();
				})
			});
			
		});
	});	
	
	
	it('PUT to /api/course/id edits a courses properties', (done) => {
		
		const course = new Course({ name: 'Intro to Comp' , courseNum: 1000, numHours: 4 });
		course.save().then(() => {
			request(app)
				.put(`/api/course/${course._id}`)
				.send({ courseNum: 2012 })
				.end(() => {
					Course.findOne({ name: 'Intro to Comp' })
						.then(course => {
							assert(course.courseNum === 2012);
							done();
						});
				});
		});
		
	});
	
	
	it('GET to /api/course/:id a course', (done) => {
		
		const course = new Course({ name: 'Intro to Comp' , courseNum: 1000, numHours: 4 });
		
		course.save().then(() => {
			request(app)
			.get(`/api/course/${course._id}`)
			.end((err, response) => {
				assert(response.body.courseNum === course.courseNum);
				done();
			});


		});
	});	
	
	it('DELETE to /api/course/id deletes a course', (done) => {
		
		const course = new Course({ name: 'Intro to Comp' , courseNum: 1000, numHours: 4 });
		
		course.save().then(() => {
			request(app)
				.delete(`/api/course/${course._id}`)
				.end((err, response) => {
					Course.count().then( newCount => {
						assert(newCount === 0);
						done();
					});
	
				});
			

		});
	});	
	
	
	
	
	
	
});