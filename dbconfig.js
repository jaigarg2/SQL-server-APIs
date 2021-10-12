
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'edu1234',
	database: 'cityfilter',
	multipleStatements: true
});

mysqlConnection.connect((err)=> {
	if(!err)
		console.log('Connection Established Successfully');
	else
		console.log('Connection Failed!'+ JSON.stringify(err, undefined, 2));
});

module.exports = mysqlConnection;