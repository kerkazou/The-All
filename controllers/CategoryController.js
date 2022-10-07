const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Category = db.categorys;

// Add Article
const addCategory = async (req, res) => {
    const { body } = req;
    Category.create({ ...body })
        .then(() => {
            res.redirect('/categories')
        }).catch(() => {
            res.json({ Error: 'Category is not added' });
        });
}

// Get All Articles
const getAllCategories = async(req, res) => {
    Category.findAll()
        .then(getallcategories => {
            res.render('categories', { getallcategories }
            )
        })
        .catch(() => { res.send('Error') }
        );
}

// Update Articles
const updateCategory = async (req, res) => {
    let { id } = req.body;
    const { body } = req;
    Category.update({ ...body }, {
        where: {
            id: id
        }
    })
        .then(() => { res.redirect('/categories') }
        )
        .catch(() => { res.send('Error') }
        );
}

// Delete Articles
const deleteCategory = async (req, res) => {
    let { id } = req.body;
    Category.destroy({
        where: {
            id: id
        }
    })
        .then(() => { res.redirect('/categories') }
        )
        .catch(() => { res.send('Error') }
        );
}

// Delete Articles
const countCategory = async (req, res) => {
    let { id } = req.params;
    Category.count()
        .then(article => {
            res.json({ article }
            )
        })
        .catch(() => { res.send('Error') }
        );
}


module.exports = {
    addCategory,
    getAllCategories,
    updateCategory,
    deleteCategory,
    countCategory
}