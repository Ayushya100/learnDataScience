const express = require('express');
const router = express.Router();

// Adding Models
const Blogs = require('../models/blogs');

router.post('/', async(req, res) => {
    try {
        const blog = new Blogs(req.body);
        const createBlog = await blog.save();
        res.status(201).send(createBlog);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;
