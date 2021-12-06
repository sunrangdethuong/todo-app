const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

// connection to mongodb
mongoose.connect('mongodb://localhost/todo_express');

app.use(methodOverride('_method'));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));


// sever configurations...
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));