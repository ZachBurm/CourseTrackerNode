const Student = require('../models/student');
//const Course = require('../models/course');


module.exports = {
	greeting(req, res) {
		res.send({ hi: 'there' });
	},
	
	create(req, res) {
		const studentProps = req.body;
		
		Student.create(studentProps)
			.then(student => res.send(student));
		
	}
	
};