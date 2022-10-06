const articleController = require('../controllers/DashboardController.js');
const router = require('express').Router();

router.get('/', articleController.Statistique);

module.exports = router;