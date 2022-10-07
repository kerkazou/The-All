const The_allController = require('../controllers/The_allController.js');
const router = require('express').Router();

router.get('/', The_allController.getAll);
router.get('/:id', The_allController.getone);
router.post('/addCommentaire', The_allController.addCommentaire);

module.exports = router;