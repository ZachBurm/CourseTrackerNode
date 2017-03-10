const Student = require('../models/student');


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
		
	edit(req, res, next) {
		const studentID = req.params.id;
		const studentProps = req.body;
		
		Student.findByIdAndUpdate({ _id: studentID}, studentProps)
			.then(() => Student.findById({ _id: studentID }))
			.then(student => res.send(student))
			.catch(next);
	},
	
	get(req, res, next) {
		
		Student.find({ email: req.params.email, password: req.params.password })
			.then(student => {
				res.send(student)
			})
			.catch(next);
	},
	
	delete(req, res, next) {
		
		Student.findByIdAndRemove({ _id: req.params.id })
			.then(student => res.send(student))
			.catch(next);
	}
	
};


