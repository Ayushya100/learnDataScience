const express = require('express');
const router = express.Router();

const Blogs = require('../models/blogs');

router.get('/', async(req, res) => {
    try {
        const allBlogs = await Blogs.find();
        res.send(allBlogs);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;
