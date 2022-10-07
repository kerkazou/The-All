const { json } = require('body-parser');
const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Article = db.articles;
const Category = db.categorys;

// Get All Articles
const getAllArticles = async (req, res) => {
    const data = {};
    Article.findAll().then(e =>{
        data.article = e;
        Category.findAll().then(e =>{
        .then(() => { res.render('articles', { data })})
        .catch(() => { res.send('Error') })
    })
}

// Get One Articles
const getoneArticle = async (req, res) => {
    const { id } = req.params;
    Article.findByPk(id)
        .then(article => {
            res.json({ article })
        })
        .catch(() => { res.send('Error') }
        );
}

// Add Article
const addArticle = async (req, res) => {
    const { body } = req;
    Article.create({ ...body })
        .then(() => {
            { res.redirect('/articles') }
        }).catch(() => {
            res.json({ Error: 'Error' });
        });
}

// Update Articles
const updateArticle = async(req , res) => {
    let {id} = req.body;
    const {body} = req;
    Article.update({...body}, {where: {
        id:id
    }})
    .then(()=>
        {res.redirect('/articles')}
    )
    .catch(()=>
        {res.send('Error')}
    );
}

// Delete Articles
const deleteArticle = async(req , res) => {
    let {id} = req.body;
    Article.destroy({where: {
        id:id
    }})
    .then(()=>
        {res.redirect('/articles')}
    )
    .catch(()=>
        {res.send('Error')}
    );
}


module.exports = {
    addArticle,
    getAllArticles,
    getoneArticle,
    updateArticle,
    deleteArticle
}