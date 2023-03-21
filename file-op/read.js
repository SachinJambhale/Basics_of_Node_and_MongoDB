const fs = require("fs");

const fileName = "topper.txt";

//async
// fs.readFile(fileName, "utf-8", (err, data) => {
//   if (err) console.log("Could not read");
//   else console.log("Data: ", data);
// });

//sync
// try {
//   const data = fs.readFileSync(fileName, "utf-8");
//   console.log(data);
// } catch (err) {
//   console.log(err);
// ----------------------------------------------------

// async

// fs.readFile(fileName, "utf-8", (err, data) => {
//   if (err) console.log("Could no read");
//   else console.log("Data: ", data);
// });

// sync
try {
  const data = fs.readFileSync(fileName, "utf-8");
  console.log(data);
} catch (err) {
  console.log(err);
}
