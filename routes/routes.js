const StudentsController = require('../controllers/students_controller');
const CourseController = require('../controllers/course_controller');
const FocusController = require('../controllers/focus_controller');
const Queries = require('../controllers/queries');
const Seed = require('../controllers/seed');

module.exports = (app) => {
		
	app.get('/api', StudentsController.greeting);
			
	app.post('/api/students/seedDB', Seed.createDB);
	
	app.delete('/api/dropDB/:pass', Seed.dropDB);
	
	//get routes for queries
	
	app.get('/api/allMajors', Queries.getAllMajors);
	
	app.get('/api/allMinors', Queries.getAllMinors);
	
	app.get('/api/allCourses', Queries.getAllCourses);
	
	//course - create, edit and delete
	
	app.post('/api/course', CourseController.create);
	
	app.put('/api/course/:id', CourseController.edit);
	
	app.get('/api/course/:id', CourseController.get);
	
	app.delete('/api/course/:id', CourseController.delete);
	
	//focus - create edit and delete
	
	app.post('/api/focus', FocusController.create);
	
	app.put('/api/focus/:id', FocusController.edit);
	
	app.get('/api/focus/:id', FocusController.get);
	
	app.delete('/api/focus/:id', FocusController.delete);
	
	//student - create, edit and delete
	
	app.post('/api/students', StudentsController.create);
	
	app.put('/api/students/:id', StudentsController.edit);
	
	app.get('/api/students/:email/:password', StudentsController.get);
	
	app.delete('/api/students/:id', StudentsController.delete);
	
}