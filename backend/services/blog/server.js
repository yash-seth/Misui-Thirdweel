const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const postsRouter = require("./router/blogPostRouter");

//config Express App
const app = express();
app.use(express.json());
app.use(cors());

//config PORT
const PORT = process.env.PORT || 5000;

//config MongoDB
//const db = process.env.BLOG_DB;
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to detabase: ');
});
mongoose.connection.on('error', (err) => {
    console.log('Error with connection to db: ' + err);
});



// To differentiate backend posts route, I am adding server/
app.use("/server/posts", postsRouter);

app.listen(PORT, ()=>{
    console.log(`${PORT}`);
});