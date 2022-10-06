const { json } = require('body-parser');
const { render } = require('ejs');
const { where } = require('sequelize');
const db = require('../models');

// Create Main Model

// Get All
const getAll = async(req , res) => {
    res.render('The-all');
}

// Get One
const getone = async (req, res) => {
    res.render('The-all');
}


module.exports = {
    getAll,
    getone
}