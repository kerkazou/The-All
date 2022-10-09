const { json } = require('body-parser');
const { render } = require('ejs');
const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Article = db.articles;
const Category = db.categorys;
const Comment = db.comments;
const Avis = db.avis;

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
const getOne = async (req, res) => {
    const { id } = req.params;
    const data = {};
    Article.findByPk(id).then(e =>{
        data.article = e;
        Comment.findAll({ where: {articleId: id} }).then(e =>{
            data.comment = e;
            Avis.count({
                where: {
                    avis: 'like',
                    articleId: id
                }}).then(e =>{
                data.likeAvis = e;
                Avis.count({
                    where: {
                        avis: 'dislike',
                        articleId: id
                    }}).then(e =>{
                    data.dislikeAvis = e;
                })
                .then(() => { res.render('The-all-article', { data })})
                .catch(() => { res.send('Error') })
            })
        })
    })
}


module.exports = {
    getAll,
    getOne,
}