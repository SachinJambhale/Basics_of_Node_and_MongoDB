// There are two ways to create a connection of mongoose to mongodb:-

// 1.Using connect() method
//     this way is used to create only one defaul connection.

// 2.Using createConnection() method
//    This way is used to create multiple connections to same of different databases

const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/morningdb";

// method 1

mongoose.connect(url, (err) => {
  console.log(err);
  if (err) console.log("Could not connected to db");
  else console.log("Connected to db");
});

// to access the default connection
const conn = mongoose.connection;

conn.on("error", () => {
  console.log("Not Connected...");
});
conn.on("disconnected", () => {
  console.log("Disconnected...");
});

// --------------------------------------------------

// // method 2
// const conn1 = mongoose.createConnection(url);

// conn1.on("connected", () => {
//   console.log("Connected...");
// });
// conn1.on("error", () => {
//   console.log("Not Connected...");
// });
// conn1.on("disconnected", () => {
//   console.log("Disconnected...");
// });
// // -------------------------------------------
// const conn2 = mongoose.createConnection(url);

// conn2.on("connected", () => {
//   console.log("Connected...");
// });
// conn2.on("error", () => {
//   console.log("Not Connected...");
// });
// conn2.on("disconnected", () => {
//   console.log("Disconnected...");
// });


