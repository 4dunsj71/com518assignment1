
const mysql = require('mariadb/callback');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'POI'});

con.connect( err=> {
    if(err) {
        console.log(`Error connecting to mariadb: ${err}`);
        process.exit(1); 
    } else { 
        console.log('connected to mariadb ok');
    }
});
module.exports = con;