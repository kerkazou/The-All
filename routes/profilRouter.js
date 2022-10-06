const profilController = require('../controllers/ProfilController');
const router = require('express').Router();


router.get('/', profilController.getProfil);
router.post('/updateProfil', profilController.updateProfil);

module.exports = router;