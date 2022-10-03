const articleController = require('../controllers/ArticleController.js');
const router = require('express').Router();

router.post('/addArticle', articleController.addArticle);
router.get('/getAllArticles', articleController.getAllArticles);
router.get('/:id', articleController.getoneArticle);
router.delete('/:id', articleController.getoneArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;