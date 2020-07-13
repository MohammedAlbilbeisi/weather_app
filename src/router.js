var userRouter = require("express").Router();

userRouter.route("/").get((req, res) => {
  res.json({ m: "hello form the other side" });
});

module.exports = userRouter;
