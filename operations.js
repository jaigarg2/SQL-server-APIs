
const mysqlConnection = require('./dbconfig');

async function getInstances(){
	try {
		let instance = await mysqlConnection
			.query("SELECT * from GPRS_Test", (err, rows, fields) => {
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
			.query("SELECT * from GPRS_Test where id = ?", [InstanceId],
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
			.query("INSERT into GPRS_Test (id, sensor1, sensor2) VALUES (?, ?, ?) RETURNING *", 
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
			.query("DELETE from GPRS_Test where id = ?", [id]);
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