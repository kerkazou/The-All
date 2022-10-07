const CommController = require('../controllers/CommentController');
const router = require('express').Router();

router.get('/', CommController.getAllComment);
router.get('/:id', CommController.getoneComment);
router.post('/editCommentaire', CommController.updateComment);
router.post('/delete', CommController.deleteComment);

module.exports = router;