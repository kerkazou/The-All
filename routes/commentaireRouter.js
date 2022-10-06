const CommController = require('../controllers/CommentController');
const router = require('express').Router();

router.get('/', CommController.getAllComment);
router.post('/addCommentaire', CommController.addCommentaire);
router.get('/:id', CommController.getoneComment);
router.put('/:id', CommController.updateComment);
router.post('/delete', CommController.deleteComment);

module.exports = router;