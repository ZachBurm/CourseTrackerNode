const StudentsController = require('../controllers/students_controller');
const Queries = require('../controllers/queries');
const Seed = require('../controllers/seed');

module.exports = (app) => {
	// Watch for incoming requests of method GET to
	// the route http://localhost:3050/api
	app.get('/api', StudentsController.greeting);
	
	app.post('/api/students', StudentsController.create);
	
	app.get('/api/students', StudentsController.fetchAll);
	
	app.put('/api/students/:id', StudentsController.edit);
	
	app.delete('/api/students', StudentsController.delete);
	
	app.get('/api/students/getMajor/:id', Queries.getMajorsForStudent);
	
	app.post('/api/students/seedDB', Seed.createDB);
	
	//get routes for queries
	
	app.get('/api/students/allMajors', Queries.getAllMajors);
	
	//course - create, edit and delete
	
	//focus - create edit and delete
	
	//student - create, edit and delete
	
}