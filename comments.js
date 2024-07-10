// Create web server
const express = require('express');
const commentRouter = express.Router();
const commentController = require('../controllers/commentController');

// Get all comments
commentRouter.get('/', commentController.getAllComments);

// Get comment by id
commentRouter.get('/:id', commentController.getCommentById);

// Add comment
commentRouter.post('/', commentController.addComment);

// Update comment by id
commentRouter.put('/:id', commentController.updateComment);

// Delete comment by id
commentRouter.delete('/:id', commentController.deleteComment);

module.exports = commentRouter;