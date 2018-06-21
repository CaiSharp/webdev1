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

//RENDER ALL CATEGORIES
let singleCategoryAPIController = (request,response) => {

    let categoryName = request.params.name;
    categoryName = categoryName.toString();
    let searchQuery = `SELECT * FROM categories WHERE name=?`;


    //CONNECT && RETRIEVE DATA
    connection.query(searchQuery,categoryName, function (err, result) {
        if (err) throw err;
        data = Object.values(JSON.parse(JSON.stringify(result)));
        let categoryId = data[0].id;

        searchQuery = `SELECT * FROM entries WHERE categoryId=?`;
        connection.query(searchQuery,categoryId, function (err, result) {
            data = Object.values(JSON.parse(JSON.stringify(result)));
            return response.send(data);
        });
    });
};

module.exports = singleCategoryAPIController;
