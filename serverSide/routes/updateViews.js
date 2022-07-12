const express = require("express");
const router = express.Router();

const Blogs = require("../models/blogs");

router.put("/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const blogsData = await Blogs.findById(_id);
        await Blogs.findByIdAndUpdate(_id, { "views": blogsData.views + 1 });
        const updatedBlogs = await Blogs.findById(_id);
        res.status(201).send(updatedBlogs);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;
