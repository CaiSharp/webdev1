const mysql = require('mysql');

//DATABASE VARIABLES
const host = "localhost";
const user = "";
const password = "";
const database = "craigslist";


let config = {
    host: host,
    user: user,
    password: password,
    database: database
};

//CREATE CONNECTION
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

module.exports.config = config;
module.exports.connection = connection;