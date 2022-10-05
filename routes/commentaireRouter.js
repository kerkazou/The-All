const CommController = require('../controllers/CommentController');
const router = require('express').Router();

router.get('/', CommController.getAllComment);
router.post('/addCommentaire', CommController.addCommentaire);
router.get('/:id', CommController.getoneComment);
router.put('/:id', CommController.updateComment);
router.delete('/:id', CommController.deleteComment);

module.exports = router;