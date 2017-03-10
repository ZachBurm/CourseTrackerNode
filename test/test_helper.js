const mongoose = require('mongoose');

before(done => {
	mongoose.connect('mongodb://localhost/courseapp_test');
	mongoose.connection
		.once('open', () => done())
		.on('error', err => {
			console.warn('Warning', error);
		});
});

beforeEach(done => {
	const {students} = mongoose.connection.collections;
	const {focus} = mongoose.connection.collections;
	const {courses} = mongoose.connection.collections;
	Promise.all([ students.drop(), focus.drop(), courses.drop() ])
		.then(() => done())
		.catch(() => done());

});