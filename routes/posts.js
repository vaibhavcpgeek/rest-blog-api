const express =  require('express');
const bodyParser = require('body-parser');
let store =  require('../models/data.js');
let app =  express();

app.use(bodyParser.json());

//middleware
module.exports = {
    getPosts(req, res) {
      res.status(200).send(store.posts);
    },
    addPost(req, res) {
      let newPost = req.body;	
      let id = store.posts.length;	
      store.posts.push(newPost);		
      res.status(201).send({id: id});
    },
    updatePost(req, res) {
      let postId =  req.params.id;
      store.posts[postId] = req.body;
      res.status(200).send(store.posts[postId]);
    },
    removePost(req, res) {
      store.posts.splice(req.params.id, 1);
      res.status(204).send();
    }
  }