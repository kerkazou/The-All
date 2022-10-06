const VisiteurController = require('../controllers/VisiteurController.js');
const router = require('express').Router();

router.get('/', VisiteurController.getAllVisiteur);

module.exports = router;