//GLOBAL VARIABLES
const mysql = require('mysql');
const config = require('../config').config;
let data;

//CREATE CONNECTION
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

//RETURN ALL ENTRIES OF SPECIFIC CATEGORY
let singleCategoryAPIController = (request,response) => {

    //GET URL PARAMETER
    let categoryName = request.params.name;
    categoryName = categoryName.toString();
    //BUILD QUERY WITH PARAMETER AS CATEGORY NAME
    let searchQuery = `SELECT * FROM categories WHERE name=?`;

    //CONNECT TO DATABASE && RETRIEVE  SINGLE CATEGORY
    connection.query(searchQuery,categoryName, function (err, result) {
        if (err) throw err;

        //CONVERT RAWPACKET OBJECT
        data = Object.values(JSON.parse(JSON.stringify(result)));
        //SELECT CATEGORY, IT CAN ONLY RETURN ONE
        let categoryId = data[0].id;
        //BUILD NEW QUERY
        searchQuery = `SELECT * FROM entries WHERE categoryId=?`;

        //CONNECT TO DATABASE && RETRIEVE ALL ENTRIES
        connection.query(searchQuery,categoryId, function (err, result) {

            //CONVERT RAWPACKET OBJECT && RETURN
            data = Object.values(JSON.parse(JSON.stringify(result)));
            return response.send(data);
        });
    });
};

module.exports = singleCategoryAPIController;
