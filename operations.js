
const mysqlConnection = require('./dbconfig');

async function getInstances(){
	try {
		let instance = await mysqlConnection
			.query("SELECT * from cf_sensor_values", (err, rows, fields) => {
				if (!err)
					return rows;
				else
					console.log(err);
		});
	}catch (error){
		console.log(error);
	}
}

async function getInstance(InstanceId){
	try {
		let instance = await mysqlConnection
			.query("SELECT * from cf_sensor_values where id = ?", [InstanceId],
			(err, row, fields) => {
				if(!err)
					return row;
				else
					console.log(err);
			});
	}catch (error){
		console.log(error);
	}
}

async function addInstance(data){
	try {
		let instance = await mysqlConnection
			.query("INSERT into cf_sensor_values (id, sensor1, sensor2) VALUES (?, ?, ?) RETURNING *", 
				[data.id, data.sensor1, data.sensor2], (err, row, fields) => {
					if (!err)
						return row;
					else
						console.log(err);
				});
	}catch (error){
		console.log(error);
	}
}

async function deleteInstance(id){
	try {
		let instance = await mysqlConnection
			.query("DELETE from cf_sensor_values where id = ?", [id]);
		return;
	}catch (error){
		console.log(error);
	}
}

module.exports = {
	getInstances: getInstances,
	getInstance: getInstance,
	addInstance: addInstance,
	deleteInstance: deleteInstance
}