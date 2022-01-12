const express = require('express');
const router = express.Router();
let Post = require("../models/blogPostModel");
let auth = require("../auth")

// Root route
router.get("/", (req, res) => {
    Post.find()
        .then((posts) => res.json(posts))
        .catch((err) => res.status(400).json("Error: " + err));
});

//Route to add a new post
router.post("/create",  (req, res) => {
    //Retrieve data for post
    const { title, body, author } = req.body;
    const date = Date.parse(req.body.date);

    //Create a new Post and save it to DB
    const newPost = new Post({
        title,
        body,
        author,
        date,
    });

    // Save the new post
    newPost
        .save()
        .then(() => res.json("Post Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//route to display a particular post
router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to edit a particular post
router.post("/edit/:id", (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            post.title = req.body.title;
            post.body = req.body.body;
            post.author = req.body.author;
            post.date = Date.parse(req.body.date);
           // post.comments = req.body.comments;

            post.save()
                .then(() => res.json("Post Edited"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to Delete a route
router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json("Post Deleted"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;