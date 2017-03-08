const Student = require('../models/student');


module.exports = {
	greeting(req, res) {
		res.send({ hi: 'there' });
	},
	
	create(req, res) {
		const studentProps = req.body;
		
		Student.create(studentProps)
			.then(student => res.send(student));
		
	},
	
	fetchAll(req, res) {
		Student.find({})
			.then(students => res.send(students));
	},
	
	delete(req, res)  {
		Student.find({}).remove()
			.then(student => res.send('success'));
			
	}
	
};