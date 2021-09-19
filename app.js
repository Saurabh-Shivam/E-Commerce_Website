const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));
app.use('/public', express.static('public')); // for getting image

app.get('/', (req, res) => {

    res.render("home");

});

app.get('/products', (req, res) => {

    res.render("products");

});

app.get('/about', (req, res) => {

    res.render("about");

});

app.get('/contact', (req, res) => {

    res.render("contact");

});

app.get('/product2', (req, res) => {

    res.render("prod2");

});

app.get('/product3', (req, res) => {

    res.render("prod3");

});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});