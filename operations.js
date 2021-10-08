const config = require('./dbconfig');
const sql = require('mssql');

async function getInstances(){
	try {
		let pool = await sql.connect(config);
		let instance = await pool.request()
			.query("SELECT * from Models");
		return instance.recordsets;
	}catch (error){
		console.log(error);
	}
}

async function getInstance(InstanceId){
	try {
		let pool = await sql.connect(config);
		let instance = await pool.request()
			.input('id', sql.Int, InstanceId)
			.query("SELECT * from Models where id = @id");
		return instance.recordsets;
	}catch (error){
		console.log(error);
	}
}

async function addInstance(data){
	try {
		let pool = await sql.connect(config);
		let instance = await pool.request()
			.input('id', sql.Int, data.id)
			.input('title', sql.NVarChar, data.title)
			.input('quantity', sql.Int, data.quantity)
			.input('sensor1', sql.Int, data.sensor1)
			.input('sensor2', sql.Int, data.sensor2)
			.execute("InsertModels");
		return instance.recordsets;
	}catch (error){
		console.log(error);
	}
}

module.exports = {
	getInstances: getInstances
	getInstance: getInstance
	addInstance: addInstance
}