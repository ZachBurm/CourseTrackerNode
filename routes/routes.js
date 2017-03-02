const DriversController = require('../controllers/temp_controller');

module.exports = (app) => {
	// Watch for incoming requests of method GET to
	// the route http://localhost:3050/api
	app.get('/api', DriversController.greeting);
	
	app.post('/api/students', DriversController.create);
	
}