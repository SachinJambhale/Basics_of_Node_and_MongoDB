require("./db");
const UserModel = require("./user.model");

// const userObj = {
//   name: "abc",
//   mobile: "1234567890",
//   city: "pune",
//   email: "abc@gmail.com",
// };

// const userDoc = new User(userObj);

// userDoc
//   .save()
//   .then((result) => {
//     console.log("Result: ", result);
//   })
//   .catch(console.log);

//Inserting multiple documents:-

const users = [
  {
    name: "bbbbb",
    mobile: "87887878",
    city: "mumbai",
    email: "ffh@gmail.com",
  },
  {
    name: "ccccc",
    mobile: "5555555",
    city: "pune",
    email: "pqr@gmail.com",
  },
  {
    name: "ddddd",
    mobile: "9999999",
    city: "nashik",
    email: "cdk@gmail.com",
  },
  {
    name: "eeeeee",
    mobile: "898885546",
    city: "nashik",
    email: "kdk@gmail.com",
  },
  {
    name: "ffffff",
    mobile: "98564789",
    city: "patna",
    email: "bsdk@gmail.com",
  },
];

UserModel.insertMany(users)
  .then((result) => {
    console.log(result);
  })
  .catch(console.log);
