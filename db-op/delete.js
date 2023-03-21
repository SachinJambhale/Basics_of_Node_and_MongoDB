require("./db");

const UserModel = require("./user.model");

UserModel.findOneAndDelete({ name: "abc" }, (err, result) => {
  if (err) console.log(err);
  console.log(result);
});
