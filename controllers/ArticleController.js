const { json } = require('body-parser');
const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Article = db.articles;
<<<<<<< HEAD

// Add Article
const addArticle = async (req, res) => {
    const { body } = req;
    Article.create({ ...body })
        .then(() => {
            res.json({ Success: 'Article is added' });
        }).catch(() => {
            res.json({ Error: 'Article is not added' });
        });
}

// Get All Articles
const getAllArticles = async (req, res) => {
    Article.findAll()
        .then(article => {
            res.json({ article }
            )
        })
        .catch(() => { res.send('Error') }
        );
}

// Get One Articles
const getoneArticle = async (req, res) => {
    let { id } = req.params;
=======
const Category = db.categorys;

// Get All Articles
const getAllArticles = async(req , res) => {
    const getallcategorys = Category.findAll()
    Article.findAll()
    .then( getallarticles=> {
        res.render('articles', {getallarticles, getallcategorys})
    })
    .catch(()=>
        {res.send('Error')}
    )
}

// Get One Articles
const getoneArticle = async(req , res) => {
    let {id} = req.params;
>>>>>>> 5028de2856ea812d283e47334033ffb45d87e6da
    Article.findByPk(id)
        .then(article => {
            res.json({ article }
            )
        })
        .catch(() => { res.send('Error') }
        );
}

// Add Article
const addArticle = async(req , res) => {
    const {body} = req;
    Article.create({...body})
    .then(()=>{
        {res.redirect('/articles')}
    }).catch(()=>{
        res.json({Error:'Error'});
    });
}

// Update Articles
<<<<<<< HEAD
const updateArticle = async (req, res) => {
    let { id } = req.params;
    const { body } = req;
    Article.update({ ...body }, {
        where: {
            id: id
        }
    })
        .then(() => { res.send('Success') }
        )
        .catch(() => { res.send('Error') }
        );
}

// Delete Articles
const deleteArticle = async (req, res) => {
    let { id } = req.params;
    Article.destroy({
        where: {
            id: id
        }
    })
        .then(() => { res.send('Success') }
        )
        .catch(() => { res.send('Error') }
        );
}

// Delete Articles
const countArticle = async (req, res) => {
    let { id } = req.params;
=======
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

// Delete Articles
const countArticle = async(req , res) => {
>>>>>>> 5028de2856ea812d283e47334033ffb45d87e6da
    Article.count()
        .then(article => {
            res.json({ article }
            )
        })
        .catch(() => { res.send('Error') }
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