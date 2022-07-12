const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Adding Middleware - cors
app.use(cors());
app.use(bodyparser.json());

// Adding required connections and Models
require('../db/conn');

// Port No and API
const port = process.env.port || 3000;
const api = '/api/v1/blogs'

// Routes
const getAllBlogs = require('../routes/getAllBlogs');
const getBlogsById = require('../routes/getBlogsById');
const createBlogs = require('../routes/createBlogs');
const updateBlogs = require('../routes/updateBlogs');
const updateViews = require('../routes/updateViews');
const updateLikes = require('../routes/updateLikes');
const deleteBlogs = require('../routes/deleteBlogs');

app.use(`${api}/getAllBlogs`, getAllBlogs);
app.use(`${api}/getBlogsById`, getBlogsById);
app.use(`${api}`, createBlogs);
app.use(`${api}/updateBlogs`, updateBlogs);
app.use(`${api}/updateViews`, updateViews);
app.use(`${api}/updateLikes`, updateLikes);
app.use(`${api}/deleteBlogs`, deleteBlogs);

app.listen(port, () => {
    console.log(`Connection has started at port: ${port}`);
});

module.exports = app;
