var express = require("express");
var bodyParser = require("body-parser");
const db = require("./db/index");
var path = require("path");
var app = express();
var user = require("./router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/user", user);

module.exports = app;
