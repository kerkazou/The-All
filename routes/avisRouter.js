const avisController = require('../controllers/AvisController.js');
const router = require('express').Router();

router.get('/', avisController.getAllAvis);
router.post('/delete', avisController.deleteAvis);

module.exports = router;