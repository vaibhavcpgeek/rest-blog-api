const express = require('express');
const posts =  require('./posts');
const comments = require('./comments');


let router = express.Router();
// Default routes
router.get("/",(req,res)=>{
    console.log("server has started at port: 3000");
    res.end();
});


// posts routes
router.get('/posts',(req,res)=>posts.getPosts(req,res));
router.post('/posts',(req,res)=>posts.addPost(req,res));
router.put('/posts/:id',(req,res)=>posts.updatePost(req,res));
router.delete('/posts/:id',(req,res)=>posts.removePost(req,res));


// comments routes
router.get('/posts/:postId/comments',(req,res)=>comments.getComments(req,res));
router.post('/posts/:postId/comments',(req,res)=>comments.addComment(req,res));
router.put('/posts/:postId/comments/:commentId',(req,res)=>comments.updateComment(req,res));
router.delete('/posts/:postId/comments/:commentId',(req,res)=>comments.removeComment(req,res));

module.exports =  router;