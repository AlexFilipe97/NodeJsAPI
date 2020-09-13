const Post = require("../models/post");

exports.getPost = (req, res) => {
    const posts = Post.find()
    .select("_id title body")
    .then(posts => {
        return res.status(200).json({
            posts: posts
        });
    })
    .catch(err => console.log(err));
};

exports.createPost = (res, req) => {
    const post = new Post(req.req.body);
    console.log("Creating Post: ", req.req.body);
    post.save()
    .then(result => {
        res.res.status(200).json({
            post: result
        });
    });
};