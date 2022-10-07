const { json } = require('body-parser');
const { render } = require('ejs');
const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Article = db.articles
const Category = db.categorys

// Get All
const getAll = async(req , res) => {
    const data = {};
    Article.findAll().then(e =>{
        data.article = e;
        Category.findAll().then(e =>{
            data.category = e;
        })
        .then(() => { res.render('The-all', { data })})
        .catch(() => { res.send('Error') })
    })
}

// Get One
const getone = async (req, res) => {
    const data = {};
    Article.findOne().then(e =>{
        data.article = e;
        Category.findAll().then(e =>{
            data.category = e;
        })
        .then(() => { res.render('The-all-article', { data })})
        .catch(() => { res.send('Error') })
    })
}


module.exports = {
    getAll,
    getone
}