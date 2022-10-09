const avisController = require('../controllers/AvisController.js');
const router = require('express').Router();

router.get('/', avisController.getAllAvis);
router.post('/delete', avisController.deleteAvis);
router.post('/addLikeAvis', avisController.addLikeAvis);
router.post('/addDislikeAvis', avisController.addDislikeAvis);

module.exports = router;