var express = require("express");
var bodyParser = require("body-parser");
const db = require("./db/index");
var path = require("path");
var app = express();
var user = require("./router");
var weather = require("./router");
var unirest = require("unirest");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/user", user);
app.use("/weather", weather);

module.exports = app;
