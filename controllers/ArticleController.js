const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Article = db.articles;

// Add Article
const addArticle = async(req , res) => {
    const {body} = req;
    Article.create({...body})
    .then(()=>{
        res.json({Success:'Article is added'});
    }).catch(()=>{
        res.json({Error:'Article is not added'});
    });
}

// Get All Articles
const getAllArticles = async(req , res) => {
    const getarticles = Article.findAll()
    .then(article=>
        {res.json({article}
    )})
    .catch(()=>
        {res.send('Error')}
    );
}

// Get One Articles
const getoneArticle = async(req , res) => {
    let {id} = req.params;
    Article.findByPk(id)
    .then(article=>
        {res.json({article}
    )})
    .catch(()=>
        {res.send('Error')}
    );
}

// Update Articles
const updateArticle = async(req , res) => {
    let {id} = req.params;
    const {body} = req;
    Article.update({...body}, {where: {
        id:id
    }})
    .then(()=>
        {res.send('Success')}
    )
    .catch(()=>
        {res.send('Error')}
    );
}

// Delete Articles
const deleteArticle = async(req , res) => {
    let {id} = req.params;
    Article.destroy({where: {
        id:id
    }})
    .then(()=>
        {res.send('Success')}
    )
    .catch(()=>
        {res.send('Error')}
    );
}

// Count Articles
const countArticle = async(req , res) => {
    let {id} = req.params;
    Article.count()
    .then(article=>
        {res.json({article}
    )})
    .catch(()=>
        {res.send('Error')}
    );
}


module.exports = {
    addArticle,
    getAllArticles,
    getoneArticle,
    updateArticle,
    deleteArticle,
    countArticle
}