const express = require("express");
const postController = require("../controllers/morePosts");
const validator = require("../validator");

router = express.Router();

router.get("/", postController.getPost);
router.post("/create", validator.createPostValidator, postController.createPost);

module.exports = router;