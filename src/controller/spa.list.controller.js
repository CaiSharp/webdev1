const fakeData = require('../init');

SPAListController = (req, res) => {
	res.json(fakeData);
};

module.exports = SPAListController;