var express = require("express");
var bodyParser = require("body-parser");
const db = require("./db/index");
var path = require("path");
var app = express();
var controller = require("./controllers");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/", controller);

module.exports = app;
