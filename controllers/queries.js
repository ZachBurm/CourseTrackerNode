const Student = require('../models/student');
const Focus = require('../models/focus');
const Course = require('../models/course');

module.exports = {
	
	getMajorsForStudent(req, res, next) {
		Student.findById(req.params.id)
			.then(student => {
				Focus.findById(student.majors[0])
					.then(major => res.send(major))
			})
			.catch(next);
		
	},
	
	//All Majors
	
	getAllMajors(req, res, next) {
		Focus.find({ type: 'Major' })	
			.then(majors => res.send(majors))
			.catch(next);
	},
	
	//All Minors
	
	getAllMinors(req, res, next) {
		Focus.find({ type: 'Minor' })	
			.then(minors => res.send(minors))
			.catch(next);
	},
	
	//All courses
	
	getAllCourses(req, res, next) {
		Course.find({})	
			.then(courses => res.send(courses))
			.catch(next);
	},
	
	//Major
	getMajorForStudent(req, res, next) {
		Focus.findById(req.params.id)
			.then(major => {
				res.send(major)
			})
			.catch(next)
	},

	
	//Minor for student
	
	getMinorForStudent(req, res, next) {
		Focus.findById(req.params.id)
			.then(minor => {
				res.send(minor)
			})
			.catch(next)
	},
	
	getCoursesForMajor(req, res, next) {
		Focus.findById(req.params.id)
			.populate('cores')
			.populate('electives')
			.then(major => {
				res.send({ cores: major.cores, electives: major.electives})
			})
			.catch(next)
		
	},
	
	//course from ID
	
	getCourseFromId(req, res, next) {
		Course.findById(req.params.id)
			.then(course => {
				res.send(course)
			})
			.catch(next)
	},
	
	//Student from email and password
	
	getStudent(req, res, next) {
		Student.find({ email: req.params.email, password: req.params.password })
			.then(student => {
				res.send(student)
			})
			.catch(next)
	}
	
	
	
};
