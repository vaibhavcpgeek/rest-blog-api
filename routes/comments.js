const express =  require('express');
const bodyParser = require('body-parser');
let store =  require('../models/data.js');
let app =  express();

// Middleware
app.use(bodyParser.json());


module.exports = {
    getComments(req, res) {
      let comments = store.posts[req.params.postId].comments;
      res.status(200).send(comments);
    }, 
    addComment(req, res) {
      let comment =  req.body;
      let postId =  req.params.postId;
      if(!store.posts[postId].comments){
        store.posts[postId].comments = [];
      }
      store.posts[postId].comments.push(comment);
      res.status(201).send({message:`Comment added for the post ${postId}`});
    },
    updateComment(req, res) {
      let postId = req.params.postId;
      let commentId =  req.params.commentId;
      store.posts[postId].comments[commentId] = req.body;
      res.status(200).send({message:"Comment updated successfully"});
    },
    removeComment(req, res) {
      let postId = req.params.postId;
      let commentId =  req.params.commentId;
      store.posts[postId].comments.splice(commentId,1);
      res.status(204).send({message:"Comment deleted successfully"});
    } 
  }