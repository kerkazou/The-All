const { where } = require('sequelize');
const { articles } = require('../models');
const db = require('../models');

// Create Main Model
const Admin = db.admins;
const Article = db.articles;
const Avis = db.avis;
const Category = db.categorys;
const Comment = db.comments;
const Visiteur = db.visiteurs;

// Statistique
const Statistique = async(req , res) => {
     const data={}
      Article.count().then(e =>{
        data.article = e;
        Avis.count().then(e=>{
            data.avis = e;
            Category.count().then(e=>{
                data.category = e;
                Comment.count().then(e=>{
                    data.comment = e;
                    Visiteur.count().then(e=>{
                        data.visiteur = e;
                    })
                    .then(() => { res.render('dashboard', { data })})
                    .catch(() => { res.send('Error') });
                })
            })
        })
    })
}

module.exports = {
    Statistique
}