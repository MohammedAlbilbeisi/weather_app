const AccountsModel = require("../db");
const bycrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");

exports.post = (req, res) => {
  var { clientEmail, clientPassword } = request.body;
  if (clientEmail && clientPassword) {
    AccountsModel.find(data)
      .then((result) => {
        console.log("......", result);
        // var { password } = result;

        res.json(result[0]);
      })
      .catch((err) => {
        if (err) {
          res.status(500);
        }
      });
  }
};
