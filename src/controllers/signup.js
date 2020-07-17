var AccountsModel = require("../db");
var bcryptjs = require("bcryptjs");
const { sign } = require("jsonwebtoken");
// exports.unique = async (req, res) => {
//   var { email } = req.headers;
// };

exports.post = (req, response) => {
  var { userName, email, password } = req.body;
  AccountsModel.find({ userName })
    .then((res) => {
      if (res.length !== 0) {
        response.status(400).send("this user is  already registered");
      } else {
        bcryptjs
          .hash(password, 10)
          .then((hash) => {
            var newUser = new AccountsModel({
              userName,
              email,
              password: hash,
            });
            newUser
              .save()
              .then((res) => {
                var { id } = res;
                sign(id, process.env.SECRET, (err, resultCookie) => {
                  if (err) {
                    response.status(401).send("Wrong in signin !");
                  } else {
                    response.cookie("jwt", resultCookie, {
                      maxAge: 6048000000,
                    });
                    response.status(200).send("Done !");
                  }
                });
              })
              .catch((err) => {
                console.log("Error>>>", err);
                response.status(500).send("Sorry for that :( error in server ");
              });
          })
          .catch((err) => {
            response.status(500).send("Sorry for that :( error in server ");
          });
      }
    })
    .catch((err) => {
      res.status(500).send("Sorry for that :( error in server ");
    });
};
