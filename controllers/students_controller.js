const Student = require('../models/student');
const Focus = require('../models/focus');

module.exports = {
	greeting(req, res) {
		res.send({ hi: 'there' });
	},
		
	create(req, res, next) {
		const studentProps = req.body;
		
		Student.create(studentProps)
			.then(student => res.send(student))
			.catch(next);
		
	},
	
	fetchAll(req, res, next) {
		Student.find({})
			.then(students => res.send(students))
			.catch(next);
	},
	
	delete(req, res, next )  {
		Student.find({}).remove()
			.then(student => res.send('success'))
			.catch(next);
			
	},
	
	edit(req, res, next) {
		const studentID = req.params.id;
		const studentProps = req.body;
		
		Student.findByIdAndUpdate({ _id: studentID}, studentProps)
			.then(() => Student.findById({ _id: studentID }))
			.then(student => res.send(student))
			.catch(next);
	}
	
};