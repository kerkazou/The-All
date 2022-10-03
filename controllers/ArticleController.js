const db = require('../models');

// Create Main Model
const Admin = db.admins;
const Article = db.articles;

// Add Article
const addArticle = async(req , res) => {
    let info = {
        title: req.body.title,
        image: req.body.image,
        discription: req.body.discription
    }

    const article = await Article.create(info);
    res.status(200).send(article);
}

// Get All Articles
const getAllArticles = async(req , res) => {
    let articles = await Article.findAll({
        attributes: [
            'title',
            'image',
            'discription'
        ]
    })

    res.status(200).send(articles);
}

// Get All Articles
const getoneArticle = async(req , res) => {
    let id = req.params.id;
    let article = await Article.findOne({
        where: {id:id}
    });

    res.status(200).send(article);
}

// Update Articles
const updateArticle = async(req , res) => {
    let id = req.params.id;
    const article = await Article.update(req.body, {id:id});

    res.status(200).send(article);
}

// Delete Articles
const deleteArticle = async(req , res) => {
    let id = req.params.id;
    await Article.destroy({
        where: {id:id}
    });

    res.status(200).send('Article is deleted !');
}


module.exports = {
    addArticle,
    getAllArticles,
    getoneArticle,
    updateArticle,
    deleteArticle
}