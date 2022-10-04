const adminController = require('../controllers/AdminController.js');
const router = require('express').Router();


router.get('/:password', adminController.getoneAdmin);
router.post('/updateAdmin', adminController.updateAdmin);

module.exports = router;