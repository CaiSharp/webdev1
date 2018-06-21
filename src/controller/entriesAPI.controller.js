const mysql = require('mysql');
const config = require('../config').config;
let data;

//DATABASE VARIABLES
const searchQuery = "SELECT * FROM entries";

//CREATE CONNECTION
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

//RENDER ALL CATEGORIES
let entriesAPIController = (request,response) => {

    //CONNECT && RETRIEVE DATA
    connection.query(searchQuery, function (err, result) {
        if (err) throw err;
        data = Object.values(JSON.parse(JSON.stringify(result)));
        return response.send(data);
    });
};

module.exports = entriesAPIController;
