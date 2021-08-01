const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all post from db
router.get('/', async(req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({ message: err});
    }
});

//submit a post
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savePost = await post.save();
        res.json(savePost); 
    }
    catch(err) {
        res.json({ message: err });
    }
});

//find postid
router.get('/:postId', async(req, res) => {   
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err) {
        res.json({ message: err});
    }
})

//delete post 
router.delete(':/postId'), async(req, res) => {
    try{
        const deletePost = await Post.remove({_id: req.params.postId });
        res.json(deletePost);
    }
    catch(err) {
        res.json({ message: err});
    }
    
}

//update the post
router.patch(':/postId', async(req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.params.title}}
            );
        res.json(updatePost);
    }
    catch(err) {
        res.json({message: err});
    }
})


module.exports = router;