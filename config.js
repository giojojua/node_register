const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Nosferatu0208',
    database: 'giodb',
    port: '3306'
});
connection.getConnection(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log(`Error while connecting with database ${err}` );
    }
});
module.exports = connection;