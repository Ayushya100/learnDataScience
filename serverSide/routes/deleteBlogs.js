const express = require("express");
const router = express.Router();

const Blogs = require("../models/blogs");

router.delete("/:id", async(req, res) => {
    try {
        const deleteBlog = await Blogs.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteBlog);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
