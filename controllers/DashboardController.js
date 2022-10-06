const { where } = require('sequelize');
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
    const article = Article.count()
    const avis = Avis.count()
    const category = Category.count()
    const comment = Comment.count()
    const visiteur = Visiteur.count()
        .then(() => {
            res.render('dashboard', { article, avis, category, comment, visiteur }
            )
        })
        .catch(() => { res.send('Error') }
        );
}

module.exports = {
    Statistique
}