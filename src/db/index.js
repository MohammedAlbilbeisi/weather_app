const mongoose = require("mongoose");
const mongUrl = " mongodb://localhost/usersdb";
require("mongoose-type-email");
mongoose
  .connect(mongUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected data!!");
  })
  .catch((err) => {
    console.log("Error when connected to the DB", err);
  });
let accountsSchema = mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
let AccountsModel = mongoose.model("Accounts", accountsSchema);

module.exports.AccountsModel = AccountsModel;
