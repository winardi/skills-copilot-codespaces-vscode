//create web server
const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/:id', auth, multer, commentCtrl.createComment);
router.get('/:id', auth, commentCtrl.getAllComments);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;