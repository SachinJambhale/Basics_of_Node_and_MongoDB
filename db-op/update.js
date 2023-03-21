require("./db");

const UserModel = require("./user.model");

// UserModel.findOneAndUpdate(filter, doc, option);

// UserModel.findOneAndUpdate({ name: "abc" }, { city: "Nagpur" }, { new: true })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(console.log);

UserModel.findOneAndUpdate({ name: "abc" }, { city: "Nagpur" })
  .then((result) => {
    console.log(result);
  })
  .catch(console.log);
