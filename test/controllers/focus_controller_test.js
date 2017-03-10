const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Student = mongoose.model('student');
const Focus = mongoose.model('focus');
const Course = mongoose.model('course');

describe('Focus Controller', () => {
	
	beforeEach(() => {
		
	});
	
	it('POST to /api/focus creates a new focus', (done) => {	
		Focus.count().then( count => {
			
			request(app)
			.post('/api/focus')
			.send({ name: 'Computer Sciene' , numHours: 256, numMinors: 2, abbrv: 'COMP', type: 'Major' })
			.end(() => {
				Focus.count().then(newCount => {
					assert(count + 1 === newCount);
					done();
				})
			});
			
		});
	});	
	
	
	it('PUT to /api/focus/id edits a focus properties', (done) => {
		
		const focus = new Focus({ name: 'Computer Sciene' , numHours: 256, numMinors: 2, abbrv: 'COMP', type: 'Major' });
		focus.save().then(() => {
			request(app)
				.put(`/api/focus/${focus._id}`)
				.send({ name: 'Business' })
				.end(() => {
					Focus.findOne({ name: 'Business' })
						.then(focus => {
							assert(focus.abbrv === 'COMP');
							done();
						});
				});
		});
		
	});
	
	
	it('GET to /api/focus/:id a focus', (done) => {
		
		const focus = new Focus({ name: 'Computer Sciene' , numHours: 256, numMinors: 2, abbrv: 'COMP', type: 'Major' });
		
		focus.save().then(() => {
			request(app)
			.get(`/api/focus/${focus._id}`)
			.end((err, response) => {
				assert(response.body.name === focus.name);
				done();
			});


		});
	});	
	
	it('DELETE to /api/focus/id deletes a focus', (done) => {
		
		const focus = new Focus({ name: 'Computer Sciene' , numHours: 256, numMinors: 2, abbrv: 'COMP', type: 'Major' });
		
		focus.save().then(() => {
			request(app)
				.delete(`/api/focus/${focus._id}`)
				.end((err, response) => {
					Focus.count().then( newCount => {
						assert(newCount === 0);
						done();
					});
	
				});
			

		});
	});	
	
	
	
	
	
	
});