const Course = require('../models/course');
const Student = require('../models/student');

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
	
	//api/course/:cId/:type/:sId
	removeStudent(req, res, next) {
		const studentID = req.params.sId;
		const courseID = req.params.cId;
		const type = req.params.type
		
		Course.findById(courseID)
			.populate(type)
			.then(course => {
				switch(type) {
				    case 'enrolledStudents':
				        course.enrolledStudents.pull({ _id: studentID })
				        break;
				    case 'plannedStudents':
				        course.plannedStudents.pull({ _id: studentID })
				        break;
			        case 'completedStudents':
			        	course.completedStudents.pull({ _id: studentID })
						break;
				    default:
				        course.plannedStudents.pull({ _id: studentID })
				}
				
				course.save()
					.then(ncourse => res.send(ncourse))
					.catch(next)
				
			})
	},
	
	//api/course/:cId/:type/:sId
	addStudent(req, res, next) {
		const studentID = req.params.sId;
		const courseID = req.params.cId;
		const type = req.params.type
		
		Course.findById(courseID)
			.populate('enrolledStudents')
			.then(course => {
				Student.findById(studentID)
					.then(student => {
						switch(type) {
							case 'enrolledStudents':
						        course.enrolledStudents.push(student)
						        break;
						    case 'plannedStudents':
						        course.plannedStudents.push(student)
						        break;
					        case 'completedStudents':
					        	course.completedStudents.push(student)
								break;
						    default:
						        course.plannedStudents.push(student)
						}

						course.save()
							.then(ncourse => res.send(ncourse))
							.catch(next)
					})
				
			})
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


