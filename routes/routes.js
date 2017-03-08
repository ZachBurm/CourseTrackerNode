const StudentsController = require('../controllers/students_controller');

module.exports = (app) => {
	// Watch for incoming requests of method GET to
	// the route http://localhost:3050/api
	app.get('/api', StudentsController.greeting);
	
	app.post('/api/students', StudentsController.create);
	
	app.get('/api/students', StudentsController.fetchAll);
	
	app.delete('/api/students', StudentsController.delete);
	
}