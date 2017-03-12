const Course = require('../models/course');


module.exports = {
	create(req, res, next) {
		const courseProps = req.body;
		
		Course.create(courseProps)
			.then(course => res.send(course))
			.catch(next);
		
	},
		
	edit(req, res, next) {
		const courseID = req.params.id;
		const courseProps = req.body;
		
		Course.findByIdAndUpdate({ _id: courseID}, courseProps)
			.then(() => Course.findById({ _id: courseID }))
			.then(course => res.send(course))
			.catch(next);
	},
	
	//'/api/course/:cId/enrolled/:sId'
	removeEnrolled(req, res, next) {
		const studentID = req.params.sId;
		const courseID = req.params.cId;
		
		Course.update({ _id: ObjectId(courseID)}, { $pullAll: { enrolledStudents: [studentID] } })
			.then(course => res.send(course))
			.catch(next)		
		
	},
	
	get(req, res, next) {
		
		Course.findById(req.params.id)
			.then(course => {
				res.send(course)
			})
			.catch(next);
	},
	
	delete(req, res, next) {
		
		Course.findByIdAndRemove({ _id: req.params.id })
			.then(course => res.send(course))
			.catch(next);
	}
	
};


