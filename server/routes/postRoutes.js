const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getSinglePost,
  editPost,
  deletePost
} = require('../controllers/post.controller');

const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.patch('/:id', authMiddleware, editPost);
router.delete('/:id', authMiddleware, deletePost);

module.exports = router;
