const Focus = require('../models/focus');


module.exports = {
	create(req, res, next) {
		const focusProps = req.body;
		
		Focus.create(focusProps)
			.then(focus => res.send(focus))
			.catch(next);
		
	},
		
	edit(req, res, next) {
		const focusID = req.params.id;
		const focusProps = req.body;
		
		Focus.findByIdAndUpdate({ _id: focusID}, focusProps)
			.then(() => Focus.findById({ _id: focusID }))
			.then(focus => res.send(focus))
			.catch(next);
	},
	
	get(req, res, next) {
		
		Focus.findById(req.params.id)
			.then(focus => {
				res.send(focus)
			})
			.catch(next);
	},
	
	delete(req, res, next) {
		
		Focus.findByIdAndRemove({ _id: req.params.id })
			.then(focus => res.send(focus))
			.catch(next);
	}
	
};


