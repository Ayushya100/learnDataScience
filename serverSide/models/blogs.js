const mongoose = require("mongoose");
const validator = require("validator");

// Collection Schema
const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorImg: {
        type: String
    },
    img: {
        type: String
    },
    version: {
        type: String,
        default: "v1.0"
    },
    overview: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    },
    likeCount: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        required: true
    }
});

// Create Collection
const Blogs = new mongoose.model("Blog", blogsSchema);

module.exports = Blogs;