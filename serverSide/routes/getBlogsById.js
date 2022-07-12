const express = require('express');
const router = express.Router();

const Blogs = require('../models/blogs');

router.get('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const blogsData = await Blogs.findById(_id);

        if(!blogsData) {
            return res.status(404).send();
        } else {
            res.send(blogsData);
        }
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;
