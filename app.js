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

    res.sendFile(__dirname + "/home.html");

});

app.get('/product', (req, res) => {

    res.sendFile(__dirname + "/product.html");

});
app.get('/about', (req, res) => {

    res.sendFile(__dirname + "/about.html");

});
app.get('/contact', (req, res) => {

    res.sendFile(__dirname + "/contact.html");

});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});