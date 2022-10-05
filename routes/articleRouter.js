const articleController = require('../controllers/ArticleController.js');
const router = require('express').Router();

router.get('/', articleController.getAllArticles);
router.post('/addArticle', articleController.addArticle);
router.get('/:id', articleController.getoneArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;