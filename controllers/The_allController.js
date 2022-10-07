const { json } = require('body-parser');
const { render } = require('ejs');
const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Article = db.articles
const Category = db.categorys
const Comment = db.comments

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
    const { id } = req.params;
    const data = {};
    Article.findByPk(id).then(e =>{
        data.article = e;
        Comment.findAll({ where: {articleId: id} }).then(e =>{
            data.comment = e;
        })
        .then(() => { res.render('The-all-article', { data })})
        .catch(() => { res.send('Error') })
    })
}

// Add commantaire
const addCommentaire = async(req , res) => {
    const {body} = req;
    Comment.create({...body})
    .then(()=>{
        res.redirect('The-all-article');
    }).catch(()=>{
        res.json({Error:'commentaire is not added'});
    })
}


module.exports = {
    getAll,
    getone,
    addCommentaire
}