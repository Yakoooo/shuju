var mysql = require('mysql')

const pool = mysql.createPool({
	host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "mydb"
})
function query(sql, cb) {
	pool.getConnection(function(err, connection) {
		connection.query(sql, function (err, rows) {
			cb(err, rows)
			connection.release()
		})
		
	})
}

exports.query = query