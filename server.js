//GLOBAL VARIABLES
const express = require('express');
const app = express();

//CREATE SERVER
app.get('/', (req, res) => {
    res.send('home');
});