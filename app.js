const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test') {
	var uriTestDb = "mongodb://courseappadmin:VDFXyRxTsf8KWNtx@cluster0-shard-00-00-gfvkx.mongodb.net:27017,cluster0-shard-00-01-gfvkx.mongodb.net:27017,cluster0-shard-00-02-gfvkx.mongodb.net:27017/courseapp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
	mongoose.connect(uriTestDb);
} else {
	mongoose.connect('mongodb://localhost/courseapp');
}



app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

module.exports = app;