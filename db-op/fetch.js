require("./db");

const UserModel = require("./user.model");

//using promise
UserModel.find({})
  // UserModel.find({ city: /pune/i })
  // UserModel.find({ $or: [{ city: /pune/i }, { city: /nashik/i }] })
  // .sort({ name: -1 })
  .then((result) => {
    console.log(result);
  })
  .catch(console.log);
