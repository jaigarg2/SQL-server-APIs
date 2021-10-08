
const database = require('./operations');
const model = require('./model');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.route('/instances').get((req, res) => {
	database.getInstances().then((result) => {
		return res.json(result[0]);
	})
});

router.route("/get-instance/:id").get((req, res) => {
	const instanceid = req.params.id;
	database.getInstance(instanceid).then((result) => {
		return res.json(result[0]);
	})
});

router.route("/add-instance").post((req, res) => {
	let instance = {...req.body};
	database.addInstance(instance).then((result) => {
		return res.status(201).json(result);
	})
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server is up and running on ${port}`);
})
