//GLOBAL VARIABLES
const mysql = require('mysql');
const config = require('../config').config;
let data;

//DATABASE VARIABLES
const searchQuery = "SELECT * FROM categories";

//CREATE CONNECTION
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

//RETURN ALL CATEGORIES
let categoriesAPIController = (request,response) => {

    //CONNECT TO DATABASE && RETRIEVE DATA
    connection.query(searchQuery, function (err, result) {
        if (err) throw err;

        //CONVERT RAWPACKET OBJECT && RETURN
        data = Object.values(JSON.parse(JSON.stringify(result)));
        return response.send(data);
    });
};

module.exports = categoriesAPIController;
