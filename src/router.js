var userRouter = require("express").Router();
var unirest = require("unirest");
const axios = require("axios");

userRouter.route("/mm").get((req, res) => {
  res.json({ m: "hello form the other side" });

});

userRouter.route('/app').get((req, res) => {
  const { city } = req.query;
  axios({
    "method":"GET",
    "url":"https://community-open-weather-map.p.rapidapi.com/weather",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key":"fa1c3921ddmshf8f4ab2964a8f51p16c26djsn656021330838",
    "useQueryString":true
    },"params":{
    "id":"2172797",
    "units":"metric",
    "mode":"xml%2C html",
    "q":city
    }
    })
    .then((response)=>{
      const { data } = response;
      res.status(200).send({result : data})
    })
    .catch((error)=>{
      res.status(404).send({result : 'City Not Found'})

    })
})

module.exports = userRouter;
