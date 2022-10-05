const categoryController = require('../controllers/CategoryController.js');
const router = require('express').Router();

router.get('/', categoryController.getAllCategories);
router.post('/addCategory', categoryController.addCategory);
router.post('/editeCategory', categoryController.updateCategory);
router.post('/delete', categoryController.deleteCategory);

module.exports = router;