const The_allController = require('../controllers/The_allController.js');
const router = require('express').Router();

router.get('/', The_allController.getAll);
router.get('/:id', The_allController.getOne);

module.exports = router;